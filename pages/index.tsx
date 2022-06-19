import React, { useState } from 'react';
import type { GetStaticProps, NextPage } from 'next';

import { StarBucksMenu, startBucksCoffeeTypeArray } from '@model/coffee';
import ClassificationNavigator from '@components/home/classification-navigator';
import Chevron from '@components/icons/chevron';
import getCoffeeList from 'api/coffee';

interface HomeProps {
  menuList: StarBucksMenu[];
}

const Home: NextPage<HomeProps> = function Home({ menuList }: HomeProps) {
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
          {menuList?.map((menu) => (
            <React.Fragment key={menu.type}>
              <dt className="mt-20 w-full bg-slate-200 p-3 rounded-md font-medium text-base">
                {menu.name}
              </dt>
              <dd className="block mb-5">
                <ul className="w-full">
                  {menu.list.map((coffee) => (
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
            </React.Fragment>
          ))}
        </dl>
      </section>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const menuList = await Promise.all(
    startBucksCoffeeTypeArray.map((type) => getCoffeeList(type)),
  );
  return { props: { menuList } };
};
