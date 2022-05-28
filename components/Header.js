import Link from 'next/link'

export default function Header() {
    return (
        <header className="relative flex items-center justify-between py-4 lg:px-20 px-4 border-b">
            <div className="flex items-center">
                <Link href="/">
                    <a className="pr-10">おかBlog</a>
                </Link>
            </div>

            <button className="md:hidden block">
                <svg fill="currentColor" height="20" viewBox="0 0 24 24" width="20"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M4 22h-4v-4h4v4zm0-12h-4v4h4v-4zm0-8h-4v4h4v-4zm3 0v4h17v-4h-17zm0 12h17v-4h-17v4zm0 8h17v-4h-17v4z"></path>
                </svg>
            </button>
            <nav className="hidden md:block">
                <ul className="flex items-center">
                    <li className="ml-2">
                        <Link href={"/"}>
                        <a href="" rel="noopener noreferrer"
                                            // target="_blank"
                                            className="block text-blue-500 underline transition-all p-1 hover:no-underline">HOME</a></Link>
                    </li>
                    <li className="ml-2">
                        <Link href={"/profile-page"}>
                            <a href=""
                               className="block text-blue-500 underline transition-all p-1 hover:no-underline">Profile</a></Link>
                    </li>

                </ul>
            </nav>
        </header>
    )
}