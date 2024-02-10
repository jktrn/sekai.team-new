import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.png'
import siteMetadata from '@/data/siteMetadata'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import Image from './Image'
import Link from './Link'

const Header = () => {
    return (
        <header className="fixed left-0 right-0 top-0 z-40 bg-background/50 shadow-sm saturate-100 backdrop-blur-[10px]">
            <div className="mx-auto flex h-[60px] max-w-4xl items-center justify-between px-8">
                <div>
                    <Link href="/" aria-label={siteMetadata.headerTitle}>
                        <div className="flex items-center justify-between">
                            <div className="mr-3">
                                <Image src={Logo} alt="Logo" width="40" height="40" />
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="flex items-center space-x-3">
                    <ul className="hidden space-x-2 md:flex">
                        {headerNavLinks.map((link, i) => (
                            <li key={i}>
                                <Link
                                    className="rounded px-3 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:bg-secondary/25 hover:brightness-125"
                                    href={link.href}
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <SearchButton />
                    <ThemeSwitch />
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}

export default Header
