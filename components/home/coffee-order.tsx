import Modal from '@components/common/modal';
import Loading from '@components/icons/loading';
import { Coffee } from '@model/coffee';
import { useRouter } from 'next/router';
import React from 'react';
import useSWR from 'swr';

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
      config={{ exitDuration: 0 }}
    >
      {data?.data ? (
        <div>
          <h2 className="font-bold">{data.data.name_ko}</h2>
          <h4 className="text-gray-500">{data.data.name_en}</h4>
          <div className="border-t-2 text-black my-4" />
        </div>
      ) : (
        <Loading size={100} speed="1s" />
      )}
    </Modal>
  );
}

export default CoffeeOrder;
