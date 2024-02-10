import Link from 'next/link'
import { slug } from 'github-slugger'
import { Badge } from './ui/badge'
import clsx from 'clsx'

interface Props {
    text: string
}

const Tag = ({ text }: Props) => {
    const specialtyColors = {
        web: 'sky',
        web3: 'sky',
        crypto: 'amber',
        fullpwn: 'rose',
        pwn: 'rose',
        reverse: 'yellow',
        forensics: 'pink',
        misc: 'red',
        osint: 'gray',
    }

    const keepClasses = (
        <span className="bg-amber-700 bg-gray-700 bg-pink-700 bg-purple-700 bg-red-700 bg-rose-700 bg-sky-700 bg-yellow-700" />
    )

    return (
        <Link href={`/tags/${slug(text)}`}>
            <Badge
                className={clsx(
                    'mb-1 mr-1 font-normal uppercase text-foreground',
                    specialtyColors[text.toLowerCase()]
                        ? `bg-${specialtyColors[text.toLowerCase()]}-700`
                        : 'bg-secondary'
                )}
            >
                {text.split(' ').join('-')}
            </Badge>
        </Link>
    )
}

export default Tag
