import Layout from "../components/Layout";
// pages/index.js
import Link from "next/link";
import { client } from "../libs/client";
import Image from "next/image";
import Profile from "../components/Profile";
import Skill from "../components/Skill";
import Moment from "react-moment";

export default function Home({ blog }) {
  return (
    <Layout title="Home">
      <ul className="grid lg:gap-6 gap-4 md:grid-cols-3 grid-cols-1">
        {console.log(blog)}
        {blog.map((blog) => (
          <li
            key={blog.id}
            className="col-span-1 border border-gray-200 rounded-lg shadow-sm overflow-hidden bg-white transition-all hover:bg-gray-50 hover:-translate-y-1"
          >
            <Link href={`/blog/${blog.id}`} className="block">
              <a className="block">
                <div className="lg:text-7xl text-5xl p-2 text-center border-b border-gray-100">
                  {blog.top ? (
                    <Image
                      src={blog.top.url}
                      width={100}
                      height={100}
                      alt="blog-img"
                    ></Image>
                  ) : (
                    <Image
                      src="/PRSN01042212_1.jpeg"
                      width={100}
                      height={100}
                      alt="blog-img"
                    ></Image>
                  )}
                </div>
                <div className="p-4">
                  <h5 className="text-lg font-bold pb-3">
                    {blog.title}
                    {blog.category.name}
                  </h5>
                  <p className="text-sm text-gray-500 pb-3">{blog.subtitle}</p>
                  <small className="block text-sm text-right">
                    <Moment format="YYYY-MM-DD">{blog.publishedAt}</Moment>{" "}
                  </small>
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
// 静的生成のためのパスを指定します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  console.log(data.contents);
  return {
    props: {
      blog: data.contents,
    },
  };
};
