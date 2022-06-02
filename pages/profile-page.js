import Link from "next/link";
import Layout from "../components/Layout";
import Profile from "../components/Profile";
import { client } from "../libs/client";
import PageTitle from "../components/PageTitle";
import SocialIcon from "../components/SocialIcon"; // TableOfContentsをインポートする
import siteMetadata from "../data/siteMetadata";
import Sidebar from "../components/Sidebar";

export default function ProfilePage({ category }) {
  return (
    <Layout>
      <div className="grid grid-cols-4 lg:gap-6 gap-4">
        <div className="lg:col-span-3 col-span-4 border border-gray-100 rounded-lg p-4 bg-white">
          <div className="lg:p-8 grid grid-cols-1">
            <div>
              <div className="pt-6 space-y-2 md:space-y-5">
                <PageTitle>{siteMetadata.author}</PageTitle>
                <p className="text-gray-500">{siteMetadata.belongs}</p>
                <div className="flex mb-3 space-x-4">
                  <SocialIcon
                    kind="github"
                    href={siteMetadata.github}
                    size={30}
                  />
                  <SocialIcon
                    kind="twitter"
                    href={siteMetadata.twitter}
                    size={30}
                  />
                  {/* <SocialIcon kind="qiita" href={siteMetadata.qiita} size={30}/> */}
                </div>
              </div>
              <div className="pt-10 pb-8 text-gray-900 max-w-none xl:col-span-2">
                <div className="flex flex-col border-2 border-gray-500 rounded border-opacity-60">
                  <h2 className="px-4 py-4 text-xl font-bold tracking-normal text-gray-900 md:text-2xl">
                    自己紹介
                  </h2>
                  <p className="px-4 py-4 text-lg leading-8 tracking-normal text-gray-900 sm:text-xl sm:leading-9 md:text-xl md:leading-10">
                    関西在住の3年目webエンジニアです。
                  </p>
                  <p className="px-4 py-4 text-lg leading-8 tracking-normal text-gray-900 sm:text-xl sm:leading-9 md:text-xl md:leading-10">
                    文系4大卒→金融の法人営業→IT企業エンジニア3年目
                  </p>
                  <p className="px-4 py-4 text-lg leading-8 tracking-normal text-gray-900 sm:text-xl sm:leading-9 md:text-xl md:leading-10">
                    PHP（Laravel）やJavaScriptの開発経験が多いです。
                  </p>
                  <p className="px-4 py-4 text-lg leading-8 tracking-normal text-gray-900 sm:text-xl sm:leading-9 md:text-xl md:leading-10">
                    エンジニアになったきっかけは友人がエンジニア職でアプリとか作ってるのが楽しそうで、自分も試しにやってみたらすごく楽しかったのが一番のきっかけ。
                  </p>
                  <p className="px-4 py-4 text-lg leading-8 tracking-normal text-gray-900 sm:text-xl sm:leading-9 md:text-xl md:leading-10">
                    今はバックエンド中心ですが、インフラもフロントも興味あります（CSS苦手ですが…）
                  </p>
                </div>
                <div className="mt-16 flex flex-col border-2 border-gray-500 rounded border-opacity-60">
                  <h2 className="px-4 py-4 text-xl font-bold tracking-normal text-gray-900 md:text-2xl">
                    スキル
                  </h2>
                  <div className="px-2 py-4 flex flex-wrap">
                    <div className="text-xs text-gray-100  text-center bg-gray-900  px-4 py-2 m-2 rounded-md">
                      HTML/CSS
                    </div>
                    <div className="text-xs text-gray-100  text-center bg-gray-900  px-4 py-2 m-2 rounded-md">
                      JavaScript
                    </div>
                    <div className="text-xs text-gray-100  text-center bg-gray-900  px-4 py-2 m-2 rounded-md">
                      PHP
                    </div>
                    <div className="text-xs text-gray-100  text-center bg-gray-900  px-4 py-2 m-2 rounded-md">
                      Ruby
                    </div>
                    <div className="text-xs text-gray-100  text-center bg-gray-900  px-4 py-2 m-2 rounded-md">
                      Laravel
                    </div>
                    <div className="text-xs text-gray-100  text-center bg-gray-900  px-4 py-2 m-2 rounded-md">
                      Ruby on Rails
                    </div>
                    <div className="text-xs text-gray-100  text-center bg-gray-900  px-4 py-2 m-2 rounded-md">
                      Vue.js
                    </div>
                    <div className="text-xs text-gray-100  text-center bg-gray-900  px-4 py-2 m-2 rounded-md">
                      React
                    </div>
                    <div className="text-xs text-gray-100  text-center bg-gray-900  px-4 py-2 m-2 rounded-md">
                      Next.js
                    </div>
                    <div className="text-xs text-gray-100  text-center bg-gray-900  px-4 py-2 m-2 rounded-md">
                      Bootstrap
                    </div>
                    <div className="text-xs text-gray-100  text-center bg-gray-900  px-4 py-2 m-2 rounded-md">
                      TailwindCSS
                    </div>
                    <div className="text-xs text-gray-100  text-center bg-gray-900  px-4 py-2 m-2 rounded-md">
                      PostgreSQL
                    </div>
                    <div className="text-xs text-gray-100  text-center bg-gray-900  px-4 py-2 m-2 rounded-md">
                      MySQL
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Sidebar category={category} />
      </div>
    </Layout>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const category = await client.get({ endpoint: "categories" });
  return {
    props: {
      category: category.contents,
    },
  };
};
