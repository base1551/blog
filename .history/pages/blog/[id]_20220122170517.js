// pages/blog/[id].js
import Layout from "../../components/Layout";
import Profile from "../../components/Profile";
import { client } from "../../libs/client";
import Image from "next/image";

// pages/blog/[id].js
export default function BlogId({ blog }) {
  return (
    <Layout>
      <div className="grid grid-cols-12">
        <div className="grid lg:col-span-9 col-span-12 bg-white shadow-xl m-5 p-8 rounded">
          {/* <div className="bg-gray-50 px-10 py-6 mx-auto"> */}
          <div className="grid grid-cols-1 bg-gray-50 px-10 py-6">
            {/* <img */}
            {/* className="object-cover w-full shadow-sm h-full" */}
            {/* src={blog.eye_catch.url} */}
            {/* /> */}
            <div className="grid col-span-1 px-10 py-6 bg-gray-50 sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-blue-500">
              {blog.title}
            </div>
            {/* {blog.category && (
                  <div className="flex items-center justify-start mt-4 mb-4">
                    <div className="px-2 py-1 font-bold bg-red-400 text-white rounded-lg">
                      #{blog.category}
                    </div>
                  </div>
                )} */}

            <div className="grid col-span-1 px-10 py-6 bg-gray-50">
              {blog.body}
            </div>
          </div>
        </div>

        {/* サイドバー */}
        <div className="grid lg:col-span-3 col-span-12 h-2">
          <Profile></Profile>
        </div>
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
