'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import { allAuthors } from 'contentlayer/generated'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { Search } from 'lucide-react'
import Image from 'next/image'

interface PaginationProps {
    totalPages: number
    currentPage: number
}
interface ListLayoutProps {
    posts: CoreContent<Blog>[]
    title?: string
    initialDisplayPosts?: CoreContent<Blog>[]
    pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
    const pathname = usePathname()
    const basePath = pathname.split('/')[1]
    const prevPage = currentPage - 1 > 0
    const nextPage = currentPage + 1 <= totalPages

    return (
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <nav className="flex justify-between">
                {!prevPage && (
                    <button
                        className="cursor-auto disabled:opacity-50"
                        disabled={!prevPage}
                    >
                        Previous
                    </button>
                )}
                {prevPage && (
                    <Link
                        href={
                            currentPage - 1 === 1
                                ? `/${basePath}/`
                                : `/${basePath}/page/${currentPage - 1}`
                        }
                        rel="prev"
                    >
                        Previous
                    </Link>
                )}
                <span>
                    {currentPage} of {totalPages}
                </span>
                {!nextPage && (
                    <button
                        className="cursor-auto disabled:opacity-50"
                        disabled={!nextPage}
                    >
                        Next
                    </button>
                )}
                {nextPage && (
                    <Link
                        href={`/${basePath}/page/${currentPage + 1}`}
                        rel="next"
                    >
                        Next
                    </Link>
                )}
            </nav>
        </div>
    )
}

export default function ListLayout({
    posts,
    title,
    initialDisplayPosts = [],
    pagination,
}: ListLayoutProps) {
    const [searchValue, setSearchValue] = useState('')
    const filteredBlogPosts = posts.filter((post) => {
        const searchContent = post.title + post.summary + post.tags?.join(' ')
        return searchContent.toLowerCase().includes(searchValue.toLowerCase())
    })

    // If initialDisplayPosts exist, display it if no searchValue is specified
    const displayPosts =
        initialDisplayPosts.length > 0 && !searchValue
            ? initialDisplayPosts
            : filteredBlogPosts

    return (
        <>
            <div className="divide-y divide-accent-foreground dark:divide-accent">
                <div className="space-y-2 pb-8 pt-6 md:space-y-5">
                    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-foreground sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                        {title && title}
                    </h1>
                    <div className="relative w-full">
                        <label>
                            <span className="sr-only">Search articles</span>
                            <input
                                aria-label="Search articles"
                                type="text"
                                onChange={(e) => setSearchValue(e.target.value)}
                                placeholder="Search articles"
                                className="block w-full rounded-md border border-muted-foreground bg-muted px-4 py-2 text-muted-foreground placeholder-muted-foreground focus:border-primary focus:ring-primary dark:border-muted"
                            />
                        </label>
                        <Search className="absolute right-3 top-3 h-5 w-5 text-muted-foreground" />
                    </div>
                </div>
                <ul>
                    {!filteredBlogPosts.length && (
                        <div className="mt-4 text-muted-foreground">
                            No posts found.
                        </div>
                    )}
                    {displayPosts.map((post) => {
                        const { path, date, title, authors, summary, tags } =
                            post
                        const authorSlug =
                            authors && authors.length > 0
                                ? authors[0]
                                : undefined

                        const authorDetails = authorSlug
                            ? allAuthors.find(
                                  (author) => author.slug === authorSlug
                              )
                            : undefined

                        const finalAuthorDetails = authorDetails ?? {
                            name: siteMetadata.author,
                            avatar: siteMetadata.image,
                            slug: siteMetadata.author,
                        }

                        return (
                            <li key={path} className="py-4">
                                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                                    <dl>
                                        <dt className="sr-only">
                                            Published on
                                        </dt>
                                        <dd className="text-base font-medium leading-6 text-muted-foreground">
                                            <time dateTime={date}>
                                                {formatDate(
                                                    date,
                                                    siteMetadata.locale
                                                )}
                                            </time>
                                        </dd>
                                    </dl>
                                    <div className="space-y-3 xl:col-span-3">
                                        <div>
                                            <h3 className="text-2xl font-bold leading-8 tracking-tight">
                                                <Link
                                                    href={`/${path}`}
                                                    className="text-foreground"
                                                >
                                                    {title}
                                                </Link>
                                            </h3>
                                            <div className="flex flex-wrap items-center">
                                                <Image
                                                    src={
                                                        finalAuthorDetails.avatar
                                                    }
                                                    alt={
                                                        finalAuthorDetails.name
                                                    }
                                                    width={24}
                                                    height={24}
                                                    className="rounded-full"
                                                />
                                                <Link
                                                    href={`/members/${finalAuthorDetails.slug}`}
                                                    className="pl-2 pr-1 text-primary"
                                                >
                                                    {finalAuthorDetails.name}
                                                </Link>
                                                <span className="pr-1 text-muted-foreground">
                                                    –
                                                </span>
                                                {tags?.map((tag) => (
                                                    <Tag key={tag} text={tag} />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="prose max-w-none text-muted-foreground">
                                            {summary}
                                        </div>
                                    </div>
                                </article>
                            </li>
                        )
                    })}
                </ul>
            </div>
            {pagination && pagination.totalPages > 1 && !searchValue && (
                <Pagination
                    currentPage={pagination.currentPage}
                    totalPages={pagination.totalPages}
                />
            )}
        </>
    )
}
