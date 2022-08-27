import { AxiosError, AxiosResponse } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';
import { auth } from '../../api/axios';
import { useQuery, QueryKey, UseQueryOptions } from 'react-query';

interface Props {
  id: number;
}

interface likeResponse {
  data: {
    like_num: number;
  };
  message: string;
  status: number;
}

const usePostLike = (
  options?: UseMutationOptions<
    AxiosResponse<likeResponse>,
    AxiosError<{ message: string }>,
    { id: string }
  >,
) => {
  return useMutation(({ id }) => auth.post(`/products/${Number(id)}/like`), {
    ...options,
    onSuccess: () => {
      alert('좋아요를 눌렀습니다');
    },
    onError: (error) => {
      alert(error);
    },
    mutationKey: 'postLike',
  });
};

export default usePostLike;
