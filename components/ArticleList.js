import Image from "next/image";
import Link from "next/link";
import Moment from "react-moment";
import Profile from "./Profile";
import Sidebar from "./Sidebar";

export default function ArticleList({ article, category }) {
  return (
    <div className="grid grid-cols-4 lg:gap-6 gap-4">
      <div className="lg:col-span-3 col-span-4 border border-gray-100 rounded-lg p-4 bg-white">
        <ul className="grid lg:gap-6 gap-4 md:grid-cols-3 grid-cols-1">
          {article.map((article) => (
            <li
              key={article.id}
              className="col-span-1 border border-gray-200 rounded-lg shadow-sm overflow-hidden bg-white transition-all hover:bg-gray-50 hover:-translate-y-1"
            >
              <Link href={`/blog/${article.id}`} className="block">
                <a className="block">
                  <div className="lg:text-7xl text-5xl p-2 text-center border-b border-gray-100">
                    {article.top ? (
                      <Image
                        src={article.top.url}
                        width={100}
                        height={100}
                        alt="blog-img"
                      ></Image>
                    ) : (
                      <Image
                        src="/profile_image.jpg"
                        width={100}
                        height={100}
                        alt="blog-img"
                      ></Image>
                    )}
                  </div>
                  <div className="p-4">
                    <h5 className="text-lg font-bold pb-3">
                      {article.title}
                      {/*{blog.category.name}*/}
                    </h5>
                    <p className="text-sm text-gray-500 pb-3">
                      {article.subtitle}
                    </p>
                    <small className="block text-sm text-right">
                      <Moment format="YYYY-MM-DD">{article.publishedAt}</Moment>{" "}
                    </small>
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Sidebar category={category} />
    </div>
  );
}
