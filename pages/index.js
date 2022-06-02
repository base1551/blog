import Layout from "../components/Layout";
import { client } from "../libs/client";
import ArticleList from "../components/ArticleList";

export default function Home({ blog, category }) {
  return (
    <Layout>
      <ArticleList article={blog} category={category} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  const categories = await client.get({ endpoint: "categories" });
  return {
    props: {
      blog: data.contents,
      category: categories.contents,
    },
  };
};
