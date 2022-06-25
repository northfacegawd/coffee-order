import React, { useState } from 'react';
import type { NextPage } from 'next';

import { CoffeeList } from '@model/coffee';
import ClassificationNavigator from '@components/home/classification-navigator';
import Chevron from '@components/icons/chevron';
import useSWR from 'swr';

interface HomeProps {}

const Home: NextPage<HomeProps> = function Home() {
  const [openCategory, setOpenCategory] = useState<boolean>(true);

  const onToggle = () => setOpenCategory((prev) => !prev);

  const { data } = useSWR<{ data: CoffeeList[] }>('/api/v1/coffee', {
    refreshInterval: 10,
  });

  return (
    <>
      <h1 className="mb-4 font-bold text-lg">Menu</h1>
      <section className="sticky top-14 z-10 bg-white shadow-md rounded-md">
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
        <dl className="flex flex-col">
          {data?.data?.map((menu) => (
            <React.Fragment key={menu.slug}>
              <dt className="my-4 w-full bg-slate-200 p-3 rounded-md font-medium text-base shadow-sm">
                {menu.name_en} ({menu.name_ko})
              </dt>
              <dd className="block mb-5">
                <ul className="w-full">
                  {menu.products.map((coffee) => (
                    <li
                      key={coffee.slug}
                      className="list-item w-[49%] m-[0.5%] float-left sm:w-[31%] sm:m-[0.65%] md:w-[24%] md:m-[0.5%] hover:underline"
                    >
                      <dl className="w-full">
                        <dt className="w-full h-auto overflow-hidden">
                          <img
                            src={`${coffee.thumbnail}`}
                            alt={coffee.name_en}
                            className="hover:scale-[1.1] transition-all cursor-pointer"
                          />
                        </dt>
                        <dd className="text-sm font-medium h-12 flex items-center justify-center">
                          {coffee.name_en}
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
