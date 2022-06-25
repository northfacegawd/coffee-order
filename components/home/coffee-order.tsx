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

  return (
    <Modal
      open={!!router.query.id}
      onClose={onCloseCoffeeOrder}
      config={MODAL_CONFIG}
    >
      {data?.data ? (
        <>
          <button
            className="top-5 right-5 absolute"
            onClick={onCloseCoffeeOrder}
            type="button"
          >
            <X />
          </button>
          <div className="md:flex md:flex-row-reverse">
            <dl className="mb-5 md:ml-5 md:mb-0 w-64 sm:w-72 md:w-80 lg:w-96">
              <dt>
                <h2 className="font-bold">{data.data.name_ko}</h2>
                <h4 className="text-gray-500">{data.data.name_en}</h4>
                <div className="border-t-2 text-black my-4" />
              </dt>
              <dd>{data.data.comments}</dd>
              <form className="mt-5">
                <button
                  type="submit"
                  className="block mx-auto mt-auto p-2 border-2 border-orange-500 rounded-lg bg-orange-500 text-white font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none"
                >
                  주문하기
                </button>
              </form>
            </dl>
            <img
              src={data.data.thumbnail}
              alt={data.data.name_en}
              className="w-64 sm:w-72 md:w-80 lg:w-96"
            />
          </div>
        </>
      ) : (
        <Loading size={100} speed="1s" />
      )}
    </Modal>
  );
}

export default CoffeeOrder;
