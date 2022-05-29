import Link from "next/link";
import {client} from "../../libs/client";
import ArticleList from "../../components/ArticleList";
import Layout from "../../components/Layout";

export default function CategoryId({blog, category}) {
    return (
        <Layout>
            <ArticleList article={blog} category={category}/>
        </Layout>
    );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
    const data = await client.get({endpoint: "categories"});

    const paths = data.contents.map((content) => `/category/${content.id}`);
    return {paths, fallback: false};
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = await client.get({endpoint: "blog", queries: {filters: `category[equals]${id}`}});
    const categories = await client.get({endpoint: "categories"});

    return {
        props: {
            blog: data.contents,
            category: categories.contents,
        },
    };
};