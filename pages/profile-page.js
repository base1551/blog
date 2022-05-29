import Link from "next/link";
import Layout from "../components/Layout";
import Profile from "../components/Profile";
import {client} from "../libs/client";
import Image from "next/image";
import Moment from "react-moment";
import {renderToc} from '../libs/render-toc'; // 目次設定ファイル
import {TableOfContents} from '../components/TableOfContents'; // TableOfContentsをインポートする

export default function ProfilePage({category, profile}) {
    return (
        <Layout>
            <div className="grid grid-cols-4 lg:gap-6 gap-4">
                <div className="lg:col-span-3 col-span-4 border border-gray-100 rounded-lg p-4 bg-white">
                    <div className="p-8 grid grid-cols-1">
                        <div
                            className="markdown col-span-1 py-6 px-0 prose prose-neutral"
                            dangerouslySetInnerHTML={{
                                __html: `${profile[0].body}`,
                            }}
                        ></div>
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
