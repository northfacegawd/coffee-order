import React, { useState } from 'react';
import axios from 'axios';
import type { GetStaticProps, NextPage } from 'next';
import { StarBucksCoffee } from '@model/coffee';
import ClassificationNavigator from '@components/home/classification-navigator';
import Chevron from '@components/icons/chevron';

interface HomeProps {
  list: StarBucksCoffee[];
}

const Home: NextPage<HomeProps> = function Home() {
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
      <section />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const {
    data: { list },
  } = await axios.get<{ list: StarBucksCoffee[] }>(
    'https://www.starbucks.co.kr/upload/json/menu/W0000171.js',
  );
  return { props: { list } };
};
