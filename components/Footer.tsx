import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import { Twitter, Mail, Github } from 'lucide-react'

export default function Footer() {
    return (
        <footer>
            <div className="mt-16 flex flex-col items-center">
                <div className="mb-3 flex space-x-4">
                    {siteMetadata.twitter && (
                        <a
                            href={siteMetadata.twitter}
                            className="text-muted-foreground hover:brightness-125 dark:hover:brightness-125"
                        >
                            <Twitter size={24} />
                        </a>
                    )}
                    {siteMetadata.email && (
                        <a
                            href={`mailto:${siteMetadata.email}`}
                            className="text-muted-foreground hover:brightness-125 dark:hover:brightness-125"
                        >
                            <Mail size={24} />
                        </a>
                    )}
                    {siteMetadata.github && (
                        <a
                            href={siteMetadata.github}
                            className="text-muted-foreground hover:brightness-125 dark:hover:brightness-125"
                        >
                            <Github size={24} />
                        </a>
                    )}
                </div>
                <div className="mb-10 flex space-x-2 text-sm text-muted-foreground">
                    <div>{siteMetadata.author}</div>
                    <div>{` • `}</div>
                    <div>{`© ${new Date().getFullYear()}`}</div>
                    <div>{` • `}</div>
                    <Link href="/">{siteMetadata.title}</Link>
                </div>
            </div>
        </footer>
    )
}
