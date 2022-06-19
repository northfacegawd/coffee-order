import React from 'react';

export default function ClassificationNavigator() {
  return (
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
        <ul className="h-24 overflow-auto mt-4 py-1 sm:h-auto sm:flex sm:flex-wrap sm:space-x-4 scroll-smooth">
          <li className="mb-3 text-sm sm:mb-0">
            <input type="checkbox" className="ml-1 align-middle " id="all" />
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
  );
}
