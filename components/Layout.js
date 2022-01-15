import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

//title = ブラウザのタイトル
//"HP by Nextjs"は初期表示
export default function Layout({ children, title = "HP by Nextjs" }) {
  //全体をラップする関数
  return (
    <div className="flex fustify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        {/* 全体のnavバー */}
        <nav className="bg-gray-800 w-screen">
          <div className="flex items-center pl-8 h-14">
            <div className="flex space-x-4">
              {/* reactのデフォルト Linkコンポーネント hrefのところに遷移したいパスを指定できる*/}
              {/* nextjsではpageディレクトリにあるパス名がデフォルトでルートに対応する*/}
              <Link href="/">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rouded">
                  Home
                </a>
              </Link>
              <Link href="blog-page">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rouded">
                  Blog
                </a>
              </Link>
              <Link href="contact-page">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rouded">
                  Contact
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      {/* mainのタブでchidlenを表示する */}
      <main className="w-screen">{children}</main>

      {/* footer */}
      <footer className="w-full h-12 flex justify-center border-t">
        <a
          className="flex items-center"
          href=""
          target="_blank"
          rel="nooperner noreferrer"
        >
          Powered by{""}
        </a>
      </footer>
    </div>
  );
}
