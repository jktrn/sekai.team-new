import Link from 'next/link'
import { slug } from 'github-slugger'
import { Badge } from './ui/badge'

interface Props {
    text: string
}

const Tag = ({ text }: Props) => {
    return (
        <Link href={`/tags/${slug(text)}`}>
            <Badge className="mb-1 mr-1 bg-secondary font-normal uppercase text-foreground">
                {text.split(' ').join('-')}
            </Badge>
        </Link>
    )
}

export default Tag
