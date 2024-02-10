import SocialBar, { socialKeys } from '@/components/SocialBar'
import { pick } from 'lodash'
import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'

const specialtyColors = {
    Web: 'sky',
    Crypto: 'purple',
    Pwn: 'red',
    Reverse: 'yellow',
    Forensics: 'pink',
    Misc: 'amber',
    OSINT: 'gray',
}

const keepClasses = (
    <span className="bg-amber-800 bg-gray-800 bg-pink-800 bg-purple-800 bg-red-800 bg-sky-800 bg-yellow-800" />
)

interface Props {
    member: Authors
    children: ReactNode
}

export default function MemberLayout({ member, children }: Props) {
    const { name, avatar, specialties } = member
    const socialLinks = pick(member, socialKeys)

    return (
        <div className="w-full p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
            <div className="flex h-full flex-col gap-6 overflow-hidden rounded-md border-2 border-border p-6 md:flex-row">
                <img
                    src={avatar}
                    className="h-auto w-24 self-start rounded"
                    alt={`Profile pic of ${name}`}
                />
                <div>
                    <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
                        {name}
                    </h2>
                    <p className="mb-3 flex max-w-none flex-row flex-wrap items-start gap-2">
                        {specialties &&
                            specialties.map((specialty) => (
                                <span
                                    key={specialty}
                                    className={`inline-block rounded-full px-3 py-1 text-white bg-${
                                        specialtyColors[specialty] ?? 'green'
                                    }-800`}
                                >
                                    {specialty}
                                </span>
                            ))}
                    </p>
                    <p className="prose mb-3 max-w-none text-muted-foreground">
                        {children || (
                            <i>(Placeholder) Member of Project SEKAI.</i>
                        )}
                    </p>
                    <p className="mb-3">
                        <SocialBar {...socialLinks} size={5} />
                    </p>
                </div>
            </div>
        </div>
    )
}
