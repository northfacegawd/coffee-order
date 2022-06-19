import React, { useState } from 'react';
import type { GetStaticProps, NextPage } from 'next';
import axios from 'axios';

import { StarBucksCoffee } from '@model/coffee';
import ClassificationNavigator from '@components/home/classification-navigator';
import Chevron from '@components/icons/chevron';

interface HomeProps {
  list: StarBucksCoffee[];
}

const Home: NextPage<HomeProps> = function Home({ list }: HomeProps) {
  const [openCategory, setOpenCategory] = useState<boolean>(true);

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
            <Chevron arrowDirection={openCategory ? 'up' : 'down'} />
          </button>
          <h1 className="font-medium text-base">분류 보기</h1>
          {openCategory && <ClassificationNavigator />}
        </div>
      </section>
      <section className="w-full mt-6">
        <dl>
          <dt className="my-3 w-full bg-slate-200 p-3 rounded-md font-medium text-base">
            콜드 부르 커피
          </dt>
          <dd className="block">
            <ul className="w-full">
              {list.map((coffee) => (
                <li
                  key={coffee.product_NM}
                  className="list-item w-[49%] m-[0.5%] float-left sm:w-[31%] sm:m-[0.65%] md:w-[24%] md:m-[0.5%]"
                >
                  <dl className="w-full">
                    <dt className="w-full h-auto overflow-hidden">
                      <img
                        src={`${coffee.img_UPLOAD_PATH}${coffee.file_PATH}`}
                        alt={coffee.product_NM}
                        className="hover:scale-[1.1] transition-all cursor-pointer"
                      />
                    </dt>
                    <dd className="text-sm font-medium h-12 flex items-center justify-center">
                      {coffee.product_NM}
                    </dd>
                  </dl>
                </li>
              ))}
            </ul>
          </dd>
        </dl>
      </section>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const {
    data: { list },
  } = await axios.get<{ list: StarBucksCoffee[] }>(
    'https://www.starbucks.co.kr/upload/json/menu/W0000053.js',
  );
  return { props: { list } };
};
