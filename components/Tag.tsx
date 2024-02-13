import Link from 'next/link'
import { slug } from 'github-slugger'
import { Badge } from './ui/badge'
import clsx from 'clsx'
import { specialtyColors } from '@/scripts/utils'

interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link href={`/tags/${slug(text)}`}>
      <Badge
        className={clsx(
          'mb-1 mr-1 font-normal uppercase text-foreground',
          specialtyColors[text.toLowerCase()]
            ? `bg-${specialtyColors[text.toLowerCase()]}-300 dark:bg-${
                specialtyColors[text.toLowerCase()]
              }-700`
            : 'bg-secondary'
        )}
      >
        {text.split(' ').join('-')}
      </Badge>
    </Link>
  )
}

export default Tag
