import { AxiosResponse } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';
import { auth } from './../../api/axios';
interface Props {
  feedId: number;
}

interface CustomMutationOption
  extends UseMutationOptions<AxiosResponse<unknown>> {
  feedId: number;
}

const postLike = ({ feedId }: Props) => async () => {
  try {
    const { data } = await auth.post(`/products/${feedId}/like`);
    return data;
  } catch (error) {
    throw error;
  }
};

const usePostLike = ({ feedId, ...option }: CustomMutationOption) => {
  return useMutation(postLike({ feedId }), option);
};
  
export default usePostLike;
