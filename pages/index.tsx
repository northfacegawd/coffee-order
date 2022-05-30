import type { NextPage } from "next";

import homeStyles from "./index.module.scss";

const Home: NextPage = () => {
  return (
    <section className={homeStyles.grid}>
      {/* 메인 카테고리 부분 */}
      <nav>
        <ul className="border-l-[3px] border-orange-500 flex flex-col space-y-2 p-2">
          <li className="text-[#666] font-medium hover:text-orange-500 hover:font-bold transition-all cursor-pointer">
            Coffee
          </li>
          <li className="text-[#666] font-medium hover:text-orange-500 hover:font-bold transition-all cursor-pointer">
            Dessert
          </li>
          <li className="text-[#666] font-medium hover:text-orange-500 hover:font-bold transition-all cursor-pointer">
            Tea
          </li>
        </ul>
      </nav>
      <section className="flex flex-col">
        {/* 서브 카테고리 부분 */}
        <nav className="flex space-x-4 border-2 border-orange-500 rounded-lg mb-4 font-medium w-full flex-wrap">
          <button className="p-2 rounded-md bg-orange-500 text-white shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none transition-colors m-2 text-sm font-medium">
            콜드브루
          </button>
          <button className="p-2 rounded-md bg-orange-500 text-white shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none transition-colors m-2 text-sm font-medium">
            라떼
          </button>
          <button className="p-2 rounded-md bg-orange-500 text-white shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none transition-colors m-2 text-sm font-medium">
            에스프레소
          </button>
          <button className="p-2 rounded-md bg-orange-500 text-white shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none transition-colors m-2 text-sm font-medium">
            디카페인
          </button>
          <button className="p-2 rounded-md bg-orange-500 text-white shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none transition-colors m-2 text-sm font-medium">
            콜드브루
          </button>
          <button className="p-2 rounded-md bg-orange-500 text-white shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none transition-colors m-2 text-sm font-medium">
            라떼
          </button>
          <button className="p-2 rounded-md bg-orange-500 text-white shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none transition-colors m-2 text-sm font-medium">
            에스프레소
          </button>
          <button className="p-2 rounded-md bg-orange-500 text-white shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none transition-colors m-2 text-sm font-medium">
            디카페인
          </button>
        </nav>
        {/* 메뉴 */}
        <div className="bg-slate-100 mx-auto">
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
            {[...Array(40)].map((_, index) => (
              <li
                key={index}
                className="bg-slate-300 w-40 h-40 md:w-44 md:h-44 lg:w-48 lg:h-48"
              >
                <img className="w-full h-auto" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
};

export default Home;
