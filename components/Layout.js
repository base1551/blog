import Head from "next/head";
import Link from "next/link";
import Profile from "./Profile";
import ThemeSwich from "./ThemeSwich";
import Header from "./Header";

//title = ブラウザのタイトル
//"HP by Nextjs"は初期表示
export default function Layout({ children }) {
  //全体をラップする関数
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Head>
        <title>OkaBlog</title>
      </Head>
      <Header />

      {/* mainのタブでchidlenを表示する */}
      <main className="lg:px-20 px-2 py-6 bg-gray-100">{children}</main>

      <div className="flex flex-grow bg-gray-100" />
      <footer className="flex items-center justify-center lg:px-72 px-8 py-4 bg-gray-800 text-white">
        <p className=" text-center text-xs">Copyright © 2022 OkaBlog.</p>
      </footer>
    </div>
  );
}
