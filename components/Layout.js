import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Profile from "./Profile";

//title = ブラウザのタイトル
//"HP by Nextjs"は初期表示
export default function Layout({ children, title = "HP by Nextjs" }) {
  //全体をラップする関数
  return (
    <div className="flex flex-col min-h-screen">
      <header className="relative flex items-center justify-between py-4 lg:px-20 px-4 border-b">
        <div className="flex items-center">
          <Link className="active" href="/">
            <a href="/yew-blog" className="text-2xl font-bold">
              JockBlog
            </a>
          </Link>
        </div>
        <button className="md:hidden block">
          <svg
            fill="currentColor"
            height="20"
            viewBox="0 0 24 24"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 22h-4v-4h4v4zm0-12h-4v4h4v-4zm0-8h-4v4h4v-4zm3 0v4h17v-4h-17zm0 12h17v-4h-17v4zm0 8h17v-4h-17v4z"></path>
          </svg>
        </button>
        <nav className="hidden md:block">
          {/* todo:nav作成 */}
          {/* <ul>
            <li>
              <Link className="active" href="/">
                <a className="text-black-300 hover:bg-gray-300 px-3 py-2 rouded">
                  Blog
                </a>
              </Link>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul> */}
        </nav>
      </header>

      {/* mainのタブでchidlenを表示する */}
      <main className="lg:px-10 px-2 py-6 bg-gray-100">
        <div className="grid grid-cols-3 lg:gap-6 gap-4">
          <div className="lg:col-span-2 col-span-3 border border-gray-100 rounded-lg p-4 bg-white">
            {children}
          </div>
          {/* サイドバー */}
          <aside className="block lg:col-span-1 col-span-3">
            <Profile></Profile>
          </aside>
        </div>
      </main>

      <div className="flex flex-grow bg-gray-100"></div>
      <footer className="flex items-center justify-center lg:px-72 px-8 py-4 bg-gray-800 text-white">
        <p className=" text-center text-xs">Copyright © 2022 JockRock95.</p>
      </footer>
    </div>
  );
}
