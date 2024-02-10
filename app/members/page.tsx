import MemberLayout from '@/layouts/MemberLayout'
import { genPageMetadata } from 'app/seo'
import { allAuthors } from 'contentlayer/generated'

export const metadata = genPageMetadata({ title: 'Blog' })

export default function Projects() {
    return (
        <>
            <div className="divide-y divide-border">
                <div className="space-y-2 pb-8 pt-6 md:space-y-5">
                    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-foreground sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                        Members
                    </h1>
                    <p className="text-lg leading-7 text-muted-foreground">
                        Members of Project SEKAI
                    </p>
                </div>
                <div className="container py-12">
                    <div className="-m-4 flex flex-wrap place-items-stretch">
                        {allAuthors
                            .filter((d) => !d.retired)
                            .filter((d) => d.name !== 'Project SEKAI')
                            .sort(
                                (a, b) =>
                                    (a.order == undefined
                                        ? Infinity
                                        : a.order) -
                                    (b.order == undefined ? Infinity : b.order)
                            )
                            .map((member) => (
                                <MemberLayout member={member} key={member.name}>
                                    {member.description}
                                </MemberLayout>
                            ))}
                    </div>
                </div>
            </div>
            <details className="">
                <summary className="space-y-2 pb-2 pt-2">
                    <h2 className="sm:text-1xl ml-2 inline-block text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-3xl">
                        Retired members
                    </h2>
                </summary>
                <div className="container py-6">
                    <div className="-m-4 flex flex-wrap place-items-stretch">
                        {allAuthors
                            .filter((d) => d.retired)
                            .sort(
                                (a, b) =>
                                    (a.order == undefined
                                        ? Infinity
                                        : a.order) -
                                    (b.order == undefined ? Infinity : b.order)
                            )
                            .map((member) => (
                                <MemberLayout member={member} key={member.name}>
                                    {member.description}
                                </MemberLayout>
                            ))}
                    </div>
                </div>
            </details>
        </>
    )
}
