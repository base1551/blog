const querystring = require("querystring");

// pages/blog/[id].js
import Layout from "../../components/Layout";
import Profile from "../../components/Profile";
import { client } from "../../libs/client";
import Image from "next/image";
import Moment from "react-moment";

// pages/blog/[id].js
export default function BlogId({ blog }) {
  return (
    <Layout>
      <div className="grid grid-cols-1">
        <div className="lg:col-span-2 col-span-3 border border-gray-100 rounded-lg p-4 bg-white">
          <article className="prose prose-slate prose-headings:border-b-2 prose-headings:border-gray-100 prose-headings:pb-2 mx-auto py-2">
            {blog.title}
          </article>
          <Moment format="YYYY/MM/DD">{blog.publishedAt}</Moment>
          <p></p>
        </div>
        {/* {blog.category && (
                  <div className="flex items-center justify-start mt-4 mb-4">
                    <div className="px-2 py-1 font-bold bg-red-400 text-white rounded-lg">
                      #{blog.category}
                    </div>
                  </div>
                )} */}

        <div
          className="grid col-span-1 px-10 py-6 prose prose-neutral"
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
        ></div>
      </div>
    </Layout>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
