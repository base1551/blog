import Layout from "../components/Layout";
// pages/index.js
import Link from "next/link";
import { client } from "../libs/client";
import Image from "next/image";
import Profile from "../components/profile";

export default function Home({ blog }) {
  return (
    <Layout title="Home">
      <div className="grid grid-cols-12">
        <div className="grid lg:col-span-9 col-span-12 ">
          {/* books */}
          <div className="bg-white shadow-xl m-5 p-8 rounded  text-left grid grid-cols-1">
            <p className="text-xl mr-5">Blogs（{blog.length}記事）</p>
            <table className="table-auto">
              <thead>
                <tr className="grid grid-cols-12 bg-gray-100">
                  <th className="px-4 py-2 grid col-span-4">カテゴリ</th>
                  <th className="px-4 py-2 grid col-span-8">タイトル</th>
                </tr>
              </thead>
              <tbody>
                {blog.map((blog) => (
                  <tr key={blog.id} className="grid grid-cols-12">
                    <td className="px-4 py-2 grid col-span-4">
                      {blog.category.name}
                    </td>
                    <td className="px-4 py-2 grid col-span-4">
                      <Link href={`/blog/${blog.id}`}>
                        <a>{blog.title}</a>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ブログ一覧 */}
          <div className="bg-white shadow-xl m-5 p-8 rounded  text-left grid grid-cols-1">
            <p className="text-xl mt-5 mr-5">Books（開設予定）</p>
            {/* <table className="table-auto">
              <thead>
                <tr className="grid grid-cols-12 bg-gray-100">
                  <th className="px-4 py-2 grid col-span-4">カテゴリ</th>
                  <th className="px-4 py-2 grid col-span-8">タイトル</th>
                </tr>
              </thead>
              <tbody>
                {blog.map((blog) => (
                  <tr key={blog.id} className="grid grid-cols-12">
                    <td className="px-4 py-2 grid col-span-4">
                      {blog.category.name}
                    </td>
                    <td className="px-4 py-2 grid col-span-4">
                      <Link href={`/blog/${blog.id}`}>
                        <a>{blog.title}</a>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table> */}
          </div>
        </div>

        <div className="grid lg:col-span-3 col-span-12 h-2">
          <Profile></Profile>
        </div>
      </div>
    </Layout>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
// 静的生成のためのパスを指定します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  return {
    props: {
      blog: data.contents,
    },
  };
};
