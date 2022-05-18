const querystring = require("querystring");

// pages/blog/[id].js
import Layout from "../../components/Layout";
import Profile from "../../components/Profile";
import { client } from "../../libs/client";
import Image from "next/image";
import Moment from "react-moment";
import { renderToc } from '../../libs/render-toc'; // 目次設定ファイル
import { TableOfContents }  from '../../components/TableOfContents'; // TableOfContentsをインポートする

// pages/blog/[id].js
export default function BlogId({ blog }) {
  const toc = renderToc(blog.body);
  return (
    <Layout>
      <div className="p-8 grid grid-cols-1">
        <article className="prose prose-slate  prose-headings:pb-2 py-2">
          <h1>{blog.title}</h1>
        </article>
        <Moment className="text-gray-700" format="YYYY-MM-DD">
          {blog.publishedAt}
        </Moment>
        <div className="border-b border-gray-100"></div>

        <div className="lg:text-7xl text-5xl p-2 text-center border-b border-gray-100">
          {blog.top ? (
            <Image
              src={blog.top.url}
              width={500}
              height={400}
              alt="blog-img"
            ></Image>
          ) : (
            <Image
              src="/PRSN01042212_1.jpeg"
              width={750}
              height={400}
              alt="blog-img"
            ></Image>
          )}
        </div>
        <div className=" col-span-1 rounded-lg p-4 bg-white"></div>
        {/* {blog.category && (
                  <div className="flex items-center justify-start mt-4 mb-4">
                    <div className="px-2 py-1 font-bold bg-red-400 text-white rounded-lg">
                      #{blog.category}
                    </div>
                  </div>
                )} */}
        {blog.toc_visible && (
            <TableOfContents toc={toc} />
        )}
          <div
          className="markdown col-span-1 py-6 px-0 prose prose-neutral"
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
