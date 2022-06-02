import Profile from "./Profile";
import Link from "next/link";

export default function Sidebar({ category }) {
  return (
    <>
      {/*サイドバー*/}
      <aside className="block lg:col-span-1 col-span-4">
        <div className="border border-gray-200 rounded-md p-4 mb-4 block bg-white">
          <div className="pl-5 text-gray-500 text-md font-semibold my-2 bg-gray-100 border-gray-200 py-3 rounded-md px-2">
            カテゴリー
          </div>
          <div className="block">
            {category.map((category) => (
              <div
                key={category.id}
                className="pl-5 py-1 border-b border-gray-100 truncate"
              >
                <Link href={`/category/${category.id}`}>
                  <a
                    href=""
                    className="cursor-pointer text-gray-500 text-sm hover:text-gray-700"
                  >
                    {category.name}
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <Profile />
      </aside>
    </>
  );
}
