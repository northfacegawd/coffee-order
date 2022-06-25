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
    router.replace(router);
  };

  return (
    <Modal
      open={!!router.query.id}
      onClose={onCloseCoffeeOrder}
      config={{ exitDuration: 0 }}
    >
      {data?.data ? null : <Loading size={100} />}
    </Modal>
  );
}

export default CoffeeOrder;
