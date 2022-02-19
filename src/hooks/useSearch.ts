import { useState } from 'react';
import { searchProduct } from './../api/product';
import { GoodsProps } from '../types/goods';
import useRequest from './useRequest';

const useSearch = (keyword: string) => {
  const [product, setProduct] = useState<GoodsProps[]>([]);
  const { loading, responseOK } = useRequest(async () => {
    const sort = '최신순';
    const page = 0;
    const response = await searchProduct(keyword, sort, page);
    if (response === null) {
      return;
    }
    setProduct(response.data);
  });
  return { product, loading, responseOK };
};

export default useSearch;
