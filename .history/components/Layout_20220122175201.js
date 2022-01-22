import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Profile from "next/image";

//title = ブラウザのタイトル
//"HP by Nextjs"は初期表示
export default function Layout({ children, title = "HP by Nextjs" }) {
  //全体をラップする関数
  return (
    <div className="flex flex-col fustify-center items-center  min-h-screen text-gray-600 text-sm font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        {/* 全体のnavバー */}
        <nav className="bg-blue-300 w-screen">
          <div className="flex items-center pl-8 h-14">
            <div className="text-lg flex space-x-4">
              {/* reactのデフォルト Linkコンポーネント hrefのところに遷移したいパスを指定できる*/}
              {/* nextjsではpageディレクトリにあるパス名がデフォルトでルートに対応する*/}
              <Link href="/">
                <a className="text-black-300 hover:bg-blue-300 px-3 py-2 rouded">
                  Home
                </a>
              </Link>
              <Link href="blog-page">
                <a className="text-black-300 hover:bg-blue-300 px-3 py-2 rouded">
                  Blog
                </a>
              </Link>
              <Link href="book-page">
                <a className="text-black-300 hover:bg-blue-300 px-3 py-2 rouded">
                  Book
                </a>
              </Link>
              {/* <Link href="book-page">
                <a className="text-black-300 hover:bg-blue-300 px-3 py-2 rouded">
                  Book
                </a>
              </Link> */}
            </div>
            {/* <div className="flex text-center">
              {" "}
              <Link href="/">
                <p className="text-white text-md px-3 py-2 rouded">
                  Jockブログ
                </p>
              </Link>
            </div> */}
          </div>
        </nav>
      </header>
      {/* mainのタブでchidlenを表示する */}
      <main className="flex-grow  w-screen">{children}</main>
      {/* サイドバー */}
      <div>
        <Profile></Profile>
      </div>

      <footer className="">
        <p className="p-2 text-center text-xs">Copyright © 2022 JockRock95.</p>
      </footer>
    </div>
  );
}
