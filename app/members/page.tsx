import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
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
                        Current active players in the team.
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
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-2xl font-bold">Retired members</AccordionTrigger>
                    <AccordionContent>
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
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </>
    )
}
