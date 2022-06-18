import React from 'react';
import axios from 'axios';
import type { GetStaticProps, NextPage } from 'next';
import { StarBucksCoffee } from '@model/coffee';

import homeStyles from './index.module.scss';

interface HomeProps {
  list: StarBucksCoffee[];
}

const Home: NextPage<HomeProps> = function Home({ list }: HomeProps) {
  return (
    <section className={homeStyles.grid}>
      {/* 메인 카테고리 부분 */}
      <nav className="sm:h-[100vh]">
        <ul className="border-l-[3px] border-orange-500 flex flex-col space-y-2 p-2 sm:sticky sm:top-[120px]">
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
          <button
            type="button"
            className="p-2 rounded-md bg-orange-500 text-white shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none transition-colors m-2 text-sm font-medium"
          >
            콜드브루
          </button>
          <button
            type="button"
            className="p-2 rounded-md bg-orange-500 text-white shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none transition-colors m-2 text-sm font-medium"
          >
            라떼
          </button>
          <button
            type="button"
            className="p-2 rounded-md bg-orange-500 text-white shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none transition-colors m-2 text-sm font-medium"
          >
            에스프레소
          </button>
          <button
            type="button"
            className="p-2 rounded-md bg-orange-500 text-white shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none transition-colors m-2 text-sm font-medium"
          >
            디카페인
          </button>
          <button
            type="button"
            className="p-2 rounded-md bg-orange-500 text-white shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none transition-colors m-2 text-sm font-medium"
          >
            콜드브루
          </button>
          <button
            type="button"
            className="p-2 rounded-md bg-orange-500 text-white shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none transition-colors m-2 text-sm font-medium"
          >
            라떼
          </button>
          <button
            type="button"
            className="p-2 rounded-md bg-orange-500 text-white shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none transition-colors m-2 text-sm font-medium"
          >
            에스프레소
          </button>
          <button
            type="button"
            className="p-2 rounded-md bg-orange-500 text-white shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none transition-colors m-2 text-sm font-medium"
          >
            디카페인
          </button>
        </nav>
        {/* 메뉴 */}
        <div>
          <dl>
            <dd>
              <div>
                <dl>
                  <dt>콜드브루 커피</dt>
                  <dd>
                    <ul>
                      {list.map((coffee) => (
                        <li
                          key={coffee.product_NM}
                          className="float-left max-w-[260px] m-[10px] min-w-[100px]"
                        >
                          <dl className="max-w-[260px] min-w-[100px]">
                            <dt className="max-w-[258px] h-auto overflow-hidden min-w-[100px]">
                              <a className="w-full h-full min-w-[100px]">
                                <img
                                  src={`${coffee.img_UPLOAD_PATH}${coffee.file_PATH}`}
                                  className="w-full h-full hover:scale-[1.1] transition-all"
                                  alt={coffee.product_NM}
                                />
                              </a>
                            </dt>
                          </dl>

                          <span className="w-full text-center">
                            {coffee.product_NM}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </dl>
              </div>
            </dd>
          </dl>
        </div>
      </section>
    </section>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const {
    data: { list },
  } = await axios.get<{ list: StarBucksCoffee[] }>(
    'https://www.starbucks.co.kr/upload/json/menu/W0000171.js',
  );
  return { props: { list } };
};
