import { useState } from 'react';
import { loadProductsBest } from '../api/product';
import { GoodsProps } from '../types/goods';
import useRequest from './useRequest';

const useBestItems = () => {
  const [product, setProduct] = useState<GoodsProps[]>([]);
  const { loading, responseOK } = useRequest(async () => {
    const response = await loadProductsBest();
    if (response === null) {
      return;
    }
    setProduct(response.data);
  });
  return { product, loading, responseOK };
};

export default useBestItems;
