import type { NextPage } from "next";

import homeStyles from "./index.module.scss";

const Home: NextPage = () => {
  return (
    <section className={homeStyles.grid}>
      {/* 메인 카테고리 부분 */}
      <nav className="bg-slate-500">
        <ul>
          <li>커피</li>
          <li>디저트</li>
          <li>차</li>
        </ul>
      </nav>
      <section className="bg-slate-600 flex flex-col items-center">
        {/* 서브 카테고리 부분 */}
        <nav>
          <ul>
            <li>콜드부르</li>
          </ul>
        </nav>
        {/* 메뉴 */}
        <div className="grid grid-cols-2 gap-2 h-full overflow-hidden md:grid-cols-4 lg:grid-cols-6 lg:gap-4">
          {[...Array(40)].map((_, index) => (
            <div key={index} className="bg-slate-500 w-28 h-28"></div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Home;
