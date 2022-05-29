import Link from "next/link";
import Layout from "../components/Layout";
import Profile from "../components/Profile";
import {client} from "../libs/client";
import Image from "next/image";
import Moment from "react-moment";
import {renderToc} from '../libs/render-toc'; // 目次設定ファイル
import {TableOfContents} from '../components/TableOfContents';
import PageTitle from "../components/PageTitle";
import SocialIcon from "../components/SocialIcon"; // TableOfContentsをインポートする
import siteMetadata from "../data/siteMetadata";


export default function ProfilePage({category, profile}) {
    return (
        <Layout>
            <div className="grid grid-cols-4 lg:gap-6 gap-4">
                <div className="lg:col-span-3 col-span-4 border border-gray-100 rounded-lg p-4 bg-white">
                    <div className="p-8 grid grid-cols-1">
                        {/*<div*/}
                        {/*    className="markdown col-span-1 py-6 px-0 prose prose-neutral"*/}
                        {/*    dangerouslySetInnerHTML={{*/}
                        {/*        __html: `${profile[0].body}`,*/}
                        {/*    }}*/}
                        {/*></div>*/}
                        <div>
                            <div className="pt-6 space-y-2 md:space-y-5">
                                <PageTitle>{siteMetadata.author}</PageTitle>
                                <p className="text-gray-500">
                                    {siteMetadata.belongs}
                                </p>
                                <div className="flex mb-3 space-x-4">
                                    <SocialIcon kind="github" href={siteMetadata.github} size={30}/>
                                    <SocialIcon kind="twitter" href={siteMetadata.twitter} size={30}/>
                                    {/*<SocialIcon kind="qiita" href={siteMetadata.qiita} size={30}/>*/}
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
                                        現在、受託開発企業で主にPHP（Laravel）やJavaScriptを利用したバックエンド開発を行なっています。
                                    </p>
                                </div>
                                <div className="mt-16 flex flex-col border-2 border-gray-500 rounded border-opacity-60">
                                    <h2 className="px-4 py-4 text-xl font-bold tracking-normal text-gray-900 md:text-2xl">
                                        スキル
                                    </h2>
                                    <div className="px-2 py-4 flex flex-wrap">
                                        <div
                                            className="text-xs text-gray-100  text-center bg-gray-900  px-4 py-2 m-2 rounded-md">
                                            HTML/CSS
                                        </div>
                                        <div
                                            className="text-xs text-gray-100  text-center bg-gray-900  px-4 py-2 m-2 rounded-md">
                                            JavaScript
                                        </div>
                                        <div
                                            className="text-xs text-gray-100  text-center bg-gray-900  px-4 py-2 m-2 rounded-md">
                                            PHP
                                        </div>
                                        <div
                                            className="text-xs text-gray-100  text-center bg-gray-900  px-4 py-2 m-2 rounded-md">
                                            Laravel
                                        </div>
                                        <div
                                            className="text-xs text-gray-100  text-center bg-gray-900  px-4 py-2 m-2 rounded-md">
                                            Vue.js
                                        </div>
                                        <div
                                            className="text-xs text-gray-100  text-center bg-gray-900  px-4 py-2 m-2 rounded-md">
                                            React
                                        </div>
                                        <div
                                            className="text-xs text-gray-100  text-center bg-gray-900  px-4 py-2 m-2 rounded-md">
                                            Next.js
                                        </div>
                                        <div
                                            className="text-xs text-gray-100  text-center bg-gray-900  px-4 py-2 m-2 rounded-md">
                                            Ruby on Rails
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/*サイドバー*/}
                <aside className="block lg:col-span-1 col-span-4">
                    <div className="border border-gray-200 rounded-md p-4 block bg-white">
                        <div
                            className="pl-5 text-gray-500 text-md font-semibold my-2 bg-gray-100 border-gray-200 py-3 rounded-md px-2">
                            カテゴリー
                        </div>
                        <div className="block">
                            {category.map((category) => (
                                <div key={category.id} className="pl-5 py-1 border-b border-gray-100 truncate">
                                    <Link href={`/category/${category.id}`}>
                                        <a href="" className="cursor-pointer text-gray-500 text-sm hover:text-gray-700">
                                            {category.name}
                                        </a></Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Profile/>
                </aside>
            </div>
        </Layout>
    );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
    const profile = await client.get({endpoint: "profile"});
    const category = await client.get({endpoint: "categories"});
    return {
        props: {
            profile: profile.contents,
            category: category.contents,
        },
    };
};
