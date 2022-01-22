import { FaPhp, FaJava, FaLaravel, FaVuejs } from "react-icons/fa";
import { SiJavascript, SiPostgresql } from "react-icons/si";
import Image from "next/image";

export default function Skill({ children }) {
  //全体をラップする関数
  return (
    <div className="bg-white text-center shadow-xl p-8 m-5 rounded">
      <div className="mt-4">
        <p className="font-bold text-lg">Skill</p>
      </div>
      <div className="mt-4">
        {/* 画像；名前 */}
        {/* 言語 */}
        <p className="font-bold">言語</p>
        <ul>
          <li>
            <FaPhp size={30} color="" />
            ：PHP
          </li>
          <li>
            <SiJavascript size={30} color="" />
            ：JavaScript
          </li>
          <li>
            <FaJava size={30} color="" />
            Java
          </li>
          <li></li>
        </ul>
        {/* フレームワーク */}
        <p className="font-bold">フレームワーク</p>
        <ul>
          <li>
            <FaLaravel size={30} color="" />
            Laravel
          </li>
          <li>
            <FaVuejs size={30} color="" />
            Vue.js
          </li>
        </ul>
        {/* その他 */}
        <p className="font-bold">その他</p>
        <ul>
          <li>
            <SiPostgresql size={30} color="" />
            Postgresql
          </li>
        </ul>
      </div>
    </div>
  );
}
