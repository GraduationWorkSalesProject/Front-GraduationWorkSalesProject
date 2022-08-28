import { AxiosResponse, AxiosError } from 'axios';
import { useQuery, UseQueryOptions } from 'react-query';
import { GoodsProps } from '../types/goods';
import { loadProductsBest } from '../api/product';

interface bestItemResponse {
  product: GoodsProps[];
}

const useBestItems = () => {
  // options?: UseQueryOptions<AxiosResponse<bestItemResponse>, AxiosError>,
  return useQuery(['bestItems'], () => loadProductsBest(), {
    onError: (error: Error) => {
      alert(error.message);
    },
  });
};

export default useBestItems;
