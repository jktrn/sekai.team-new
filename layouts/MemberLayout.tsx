import SocialBar, { socialKeys } from '@/components/SocialBar'
import { pick } from 'lodash'
import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import Image from 'next/image'
import { allBlogs } from 'contentlayer/generated'

const specialtyColors = {
    Web: 'sky',
    Crypto: 'amber',
    Pwn: 'rose',
    Reverse: 'yellow',
    Forensics: 'pink',
    Misc: 'red',
    OSINT: 'gray',
}

// Generates a list of classes to keep
const keepClasses = (
    <span className="bg-amber-700 bg-gray-700 bg-green-700 bg-pink-700 bg-purple-700 bg-red-700 bg-rose-700 bg-sky-700 bg-yellow-700" />
)

interface Props {
    member: Authors
    children: ReactNode
}

export default function MemberLayout({ member, children }: Props) {
    const { name, avatar, specialties, slug } = member
    const socialLinks = pick(member, socialKeys)
    const hasWriteups =
        allBlogs.filter((blog) => blog.authors?.includes(slug)).length > 0

    return (
        <div className="w-full p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
            <div className="flex h-full flex-col gap-6 overflow-hidden rounded-md border-2 border-border p-6 md:flex-row">
                <Image
                    src={avatar}
                    className="h-auto w-24 self-start rounded"
                    alt={`Profile pic of ${name}`}
                    width={96}
                    height={96}
                    unoptimized
                />
                <div className="w-full">
                    <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
                        {name}
                    </h2>
                    <span className="mb-3 flex max-w-none flex-row flex-wrap items-start gap-2">
                        {specialties &&
                            specialties.map((specialty) => (
                                <span
                                    key={specialty}
                                    className={`inline-block rounded-full px-3 py-1 text-white bg-${
                                        specialtyColors[specialty] ?? 'green'
                                    }-700`}
                                >
                                    {specialty}
                                </span>
                            ))}
                    </span>
                    <p className="prose mb-3 max-w-none text-muted-foreground">
                        {children || (
                            <i>(Placeholder) Member of Project SEKAI.</i>
                        )}
                    </p>
                    <span className="flex w-full justify-between">
                        <SocialBar {...socialLinks} size={5} />
                        {hasWriteups && (
                            <a
                                href={`/members/${name.toLowerCase()}`}
                                className="text-primary"
                            >
                                View writeups &rarr;
                            </a>
                        )}
                    </span>
                </div>
            </div>
        </div>
    )
}
