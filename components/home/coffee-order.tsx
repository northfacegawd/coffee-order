import React from 'react';
import useSWR from 'swr';

import Modal, { ModalConfig } from '@components/common/modal';
import Loading from '@components/icons/loading';
import X from '@components/icons/x';
import { Coffee } from '@model/coffee';
import { useRouter } from 'next/router';

const MODAL_CONFIG: ModalConfig = {
  contentStyle: { position: 'relative' },
  enterDuration: 200,
};

function CoffeeOrder() {
  const router = useRouter();

  const { data } = useSWR<{ data: Coffee }>(
    router.query.id ? `/api/v1/coffee/${router.query.id}` : null,
  );

  const onCloseCoffeeOrder = () => {
    delete router.query.id;
    router.replace(router, undefined, { scroll: false });
  };

  const productInfoRender = (
    <>
      <dt>
        <h2 className="font-bold">{data?.data.name_ko}</h2>
        <h4 className="text-gray-500">{data?.data.name_en}</h4>
        <div className="border-t-2 text-black my-4" />
      </dt>
      <dd>
        <p className="text-base">{data?.data.comments}</p>
      </dd>
    </>
  );

  const orderFormRender = (
    <>
      <h4 className="mt-2 border-y py-2 font-semibold">추가메뉴</h4>
      <h5 className="mt-2">얼음 선택</h5>
      <div className="flex space-x-3">
        <label htmlFor="ice_little">
          적게
          <input
            name="ice"
            id="ice_little"
            type="radio"
            className="ml-1 align-text-bottom"
          />
        </label>
        <label htmlFor="ice_default">
          보통
          <input
            name="ice"
            id="ice_default"
            type="radio"
            className="ml-1 align-text-bottom"
          />
        </label>
        <label htmlFor="ice_many">
          많이
          <input
            name="ice"
            id="ice_many"
            type="radio"
            className="ml-1 align-text-bottom"
          />
        </label>
      </div>
      <button
        type="submit"
        className="block mx-auto mt-4 p-2 border-2 border-orange-500 rounded-lg bg-orange-500 text-white font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none"
      >
        주문하기
      </button>
    </>
  );

  return (
    <Modal
      open={!!router.query.id}
      onClose={onCloseCoffeeOrder}
      config={MODAL_CONFIG}
    >
      {data?.data ? (
        <form>
          <button
            className="top-5 right-5 absolute"
            onClick={onCloseCoffeeOrder}
            type="button"
          >
            <X />
          </button>
          <div className="flex flex-col md:flex-row-reverse">
            <div className="order-3 md:order-none md:mb-5 md:ml-5 w-64 sm:w-72 md:w-80 lg:w-96">
              <dl className="hidden md:block">{productInfoRender}</dl>
              <div>{orderFormRender}</div>
            </div>
            <dl className="order-1 md:order-none md:hidden mb-5 md:ml-5 md:mb-0 w-64 sm:w-72 md:w-80 lg:w-96">
              {productInfoRender}
            </dl>
            <img
              src={data.data.thumbnail}
              alt={data.data.name_en}
              className="order-2 md:order-none w-64 sm:w-72 md:w-80 lg:w-96"
            />
          </div>
        </form>
      ) : (
        <Loading size={100} speed="1s" />
      )}
    </Modal>
  );
}

export default CoffeeOrder;
