import { FaGithub, FaTwitter, FaInstagram, SiQiita } from "react-icons/fa";
import Image from "next/image";
import index from "../components/Profile";

export default function Profile() {
  //全体をラップする関数
  return (
    <div className="shadow-sm border border-gray-100 rounded-lg p-4 mb-6 bg-white sticky top-6">
      <div className="flex items-center">
        <Image
          className="rounded-full"
          src="/profile_image.jpg"
          width={60}
          height={60}
          alt="Avatar"
        ></Image>
        <div className="ml-2">
          <h4 className="font-bold text-lg pb-1">Oka</h4>
          <ul className="grid grid-cols-3 gap-3">
            <a
              href="https://twitter.com/JockRock95"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block col-span-1 text-gray-300 transition-all hover:text-gray-400"
            >
              <FaTwitter size={30} color="" />
            </a>
            <a
              href="https://www.instagram.com/shiga_bishoku/"
              target="_blank"
              rel="noopener noreferrer"
              className="pr-1 inline-block col-span-1 text-gray-300 transition-all hover:text-gray-400"
            >
              <FaInstagram size={30} color="" />
            </a>
          </ul>
        </div>
      </div>
      <p className="pt-3 text-sm text-gray-600">
        2020年4月〜関西のWeb企業に勤めている27歳。主な言語はPHP・JavaScript。高校野球にかなり詳しいけどなかなか話す機会がない。趣味は筋トレと草野球。
      </p>
    </div>
  );
}
