import Head from "next/head";
import Link from "next/link";
import Profile from "./Profile";

//title = ブラウザのタイトル
//"HP by Nextjs"は初期表示
export default function Layout({ children, title = "HP by Nextjs" }) {
  //全体をラップする関数
  return (
    <div className="flex flex-col min-h-screen">
        {/*<Head>*/}
        {/*    <title>OkaBlog</title>*/}
        {/*</Head>*/}
      <header className="relative flex items-center justify-between py-4 lg:px-20 px-4 border-b">
        <div className="flex items-center">
          <Link className="active" href="/index">
            <a className="text-2xl font-bold">
              OkaBlog
            </a>
          </Link>
        </div>
      </header>

      {/* mainのタブでchidlenを表示する */}
      <main className="lg:px-20 px-2 py-6 bg-gray-100">
        <div className="grid grid-cols-4 lg:gap-6 gap-4">
          <div className="lg:col-span-3 col-span-4 border border-gray-100 rounded-lg p-4 bg-white">
            {children}
          </div>
          {/* サイドバー */}
          <aside className="block lg:col-span-1 col-span-4">
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
