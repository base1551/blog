import Link from "next/link";
import Layout from "../../components/Layout";
import Profile from "../../components/Profile";
import { client } from "../../libs/client";
import Image from "next/image";
import Moment from "react-moment";
import { renderToc } from "../../libs/render-toc"; // 目次設定ファイル
import { TableOfContents } from "../../components/TableOfContents"; // TableOfContentsをインポートする
import Sidebar from "../../components/Sidebar";

import {
  TwitterIcon,
  TwitterShareButton,
  LineShareButton,
  LineIcon,
  HatenaShareButton,
  HatenaIcon,
} from "react-share";

export default function BlogId({ blog, category }) {
  const toc = renderToc(blog.body);
  return (
    <Layout>
      <div className="grid grid-cols-4 lg:gap-6 gap-4">
        <div className="lg:col-span-3 col-span-4 border border-gray-100 rounded-lg p-2 bg-white">
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
                  src="/profile_image.jpg"
                  width={750}
                  height={400}
                  alt="blog-img"
                ></Image>
              )}
            </div>
            <div className=" col-span-1 rounded-lg p-4 bg-white"></div>
            {blog.toc_visible && <TableOfContents toc={toc} />}
            <div
              className="markdown col-span-1 py-6 px-0 prose prose-neutral"
              dangerouslySetInnerHTML={{
                __html: `${blog.body}`,
              }}
            ></div>
            {/* シェアボタン */}
            {/* <div>
              <TwitterShareButton
                className="mr-1"
                url={window.location.href}
                title={blog.title}
              >
                <TwitterIcon round={true} size={32} />
              </TwitterShareButton>
              <LineShareButton
                className="mr-1"
                url={window.location.href}
                quote={blog.title}
              >
                <LineIcon round={true} size={32} />
              </LineShareButton>
              <HatenaShareButton
                className="mr-1"
                url={window.location.href}
                quote={blog.title}
              >
                <HatenaIcon round={true} size={32} />
              </HatenaShareButton>
            </div> */}
          </div>
        </div>
        <Sidebar category={category} />
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
  const categories = await client.get({ endpoint: "categories" });

  return {
    props: {
      blog: data,
      category: categories.contents,
    },
  };
};
