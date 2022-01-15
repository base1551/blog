// pages/blog/[id].js
import Layout from "../../components/Layout";
import Profile from "../../components/profile";
import { client } from "../../libs/client";
import styles from "../../styles/Home.module.scss";
import Image from "next/image";

// pages/blog/[id].js
export default function BlogId({ blog }) {
  return (
    <Layout className={styles.main}>
      <div className="grid grid-cols-12">
        <div className="grid lg:col-span-9 col-span-12 bg-white text-center shadow-xl mr-2 p-8 rounded">
          <h1 className={styles.title}>{blog.title}</h1>
          <p className={styles.publishedAt}>{blog.publishedAt}</p>
          <p className="category">{blog.category && `${blog.category.name}`}</p>
          <div
            dangerouslySetInnerHTML={{
              __html: `${blog.body}`,
            }}
            className={styles.post}
          />
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
