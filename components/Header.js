import Link from 'next/link'
import siteMetadata from "../data/siteMetadata";
import headerNavLinks from "../data/NavLinks";
import ThemeSwich from "../components/ThemeSwich";
import {useRouter} from "next/router";
// import Logo from "../public/images/logo.svg";
import MobileNav from "./MobileNav";

export default function Header() {
    const router = useRouter();

    return (
        <header className="relative flex items-center justify-between py-4 lg:px-20 px-4 border-b">
            <div>
                <div className="flex items-center justify-between">
                    <Link href="/" aria-label="OkaBlog">
                        <a
                            className="h-7 text-xl sm:text-xl font-semibold text-gray-900 sm:block">
                            {siteMetadata.headerTitle}
                        </a>
                    </Link>
                </div>
            </div>
            <div className="flex items-center text-base leading-5">
                <div className="hidden md:flex">
                    {headerNavLinks.map((link) => (
                        <div className="pl-5" key={link.title}>
                            <Link
                                href={link.href}
                                className="font-medium text-gray-900 dark:text-gray-100 border-b-2 border-transparent hover:border-gray-900 dark:hover:border-gray-100 transition duration-300 ease-in-out m-2 py-2 md:mx-5"
                            >
                                {link.title}
                            </Link>
                        </div>
                    ))}
                </div>
                {/*<ThemeSwich/>*/}
                <MobileNav/>
            </div>
        </header>

    )
}