import React, { useState } from 'react';
import axios from 'axios';
import type { GetStaticProps, NextPage } from 'next';
import { StarBucksCoffee } from '@model/coffee';

interface HomeProps {
  list: StarBucksCoffee[];
}

const Home: NextPage<HomeProps> = function Home() {
  const [openCategory, setOpenCategory] = useState<boolean>(false);

  const onToggle = () => setOpenCategory((prev) => !prev);

  return (
    <>
      <h1 className="mb-4 font-bold text-lg">Menu</h1>
      <section>
        <div className="w-full border-[1px] rounded-md p-5 relative">
          <button
            type="button"
            className="absolute top-[15px] right-[20px] p-1 bg-slate-200 rounded-full"
            onClick={onToggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={openCategory ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
              />
            </svg>
          </button>
          <h1 className="font-medium text-base">분류 보기</h1>
          {openCategory && (
            <>
              <hr className="my-5" />
              <div>
                <ul className="flex flex-wrap space-x-1">
                  <li className="p-2 flex-1 text-center bg-orange-400 rounded-sm cursor-pointer text-sm font-[500] max-w-[200px] hover:bg-orange-500 transition-all text-white">
                    커피
                  </li>
                  <li className="p-2 flex-1 text-center bg-slate-200 rounded-sm cursor-pointer text-sm font-[500] max-w-[200px] hover:bg-orange-500 transition-all hover:text-white">
                    디저트
                  </li>
                </ul>
                <ul />
                <ul className="h-24 overflow-auto mt-4 py-1 sm:h-auto sm:flex sm:flex-wrap sm:space-x-4">
                  <li className="mb-3 text-sm sm:mb-0">
                    <input
                      type="checkbox"
                      className="ml-1 align-middle "
                      id="all"
                    />
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label className="align-middle ml-2" htmlFor="all">
                      전체 상품보기
                    </label>
                  </li>
                  <li className="mb-3 text-sm">
                    <input
                      type="checkbox"
                      className="ml-1 align-middle "
                      id="cold_brew"
                    />
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label className="align-middle ml-2" htmlFor="cold_brew">
                      콜드 브루 커피
                    </label>
                  </li>
                  <li className="mb-3 text-sm">
                    <input
                      type="checkbox"
                      className="ml-1 align-middle "
                      id="espresso"
                    />
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label className="align-middle ml-2" htmlFor="espresso">
                      에스프레소
                    </label>
                  </li>
                  <li className="mb-3 text-sm">
                    <input
                      type="checkbox"
                      className="ml-1 align-middle "
                      id="blended"
                    />
                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                    <label className="align-middle ml-2" htmlFor="blended">
                      블렌디드
                    </label>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </section>
      <section />
    </>
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
