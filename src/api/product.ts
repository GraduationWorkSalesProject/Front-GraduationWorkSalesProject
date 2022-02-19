import { ProductResponse, DataType } from './../types/goods';
import { client } from './axios';
import { Client } from './http';
import { AxiosResponse } from 'axios';

export const AddProductApi = async (form: any) => {
  const response = await Client.post('/products', form, 'multipart/form-data');
  return response;
};

export const loadProductsRecent = async () => {
  const response: AxiosResponse<DataType> = await client.get(
    `/products/lists/recent`,
  );
  if (response.status !== 200) {
    throw response.status;
  }
  return response.data;
};

export const loadProductsBest = async () => {
  const response: AxiosResponse<DataType> = await client.get(
    `/products/lists/like`,
  );
  if (response.status !== 200) {
    throw response.status;
  }
  console.log('res', response);
  return response.data;
};

export const loadProduct = async (id: number) => {
  const response = await client.get<ProductResponse>(`/products/${id}`);
  if (response.status !== 200) {
    throw response.status;
  }
  console.log('res', response);
  return response.data;
};

export const searchProduct = async (
  keyword: string,
  sort: string,
  page: number,
) => {
  const response: AxiosResponse<DataType> = await client.post(`/products`, {
    keyword,
    sort,
    page,
  });

  if (response.status !== 200) {
    throw response.status;
  }
  console.log('res', response);
  return response.data;
};
