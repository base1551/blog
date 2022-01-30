import { FaGithub, FaTwitter } from "react-icons/fa";
import Image from "next/image";

export default function Profile({ children }) {
  //全体をラップする関数
  return (
    <div className="shadow-sm border border-gray-100 rounded-lg p-4 mb-6 bg-white sticky top-6">
      <div className="mt-4">
        <p className="font-bold text-lg">ジョックブログ</p>
      </div>
      <div className="flex justify-center mt-4">
        <Image
          className="rounded-full"
          src="/PRSN01042212_1.jpeg"
          width={60}
          height={60}
          alt="Avatar"
        ></Image>
      </div>
      <div className="mt-4">
        <p className="font-bold">Address</p>
        <p className="text-xs mt-2 text-gray-600">関西</p>
        <p className="font-bold mt-2">About</p>
        <p className="text-xs mt-2 text-gray-600">1995年生</p>
      </div>
      <div className="mt-6 flex justify-around">
        <div>
          <a
            href="https://twitter.com/JockRock95"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={30} color="#1DA1F2" />
          </a>
        </div>
        {/* github */}
        <div>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}
