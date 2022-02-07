import { client } from './axios';
import { Client } from './http';
import { GoodsProps } from '../types/goods';
 
export const AddProductApi = async (form: any) => {
  const response = await Client.post('/products', form, 'multipart/form-data'); 
  return response;
};

export const loadProductsRecent  = async () =>{
  const response = await client.get(`/products/lists/recent`);
  if (response.status !== 200) {
    throw response.status;
  }
  console.log("응답",response);
  return response;
}

export const loadProductsBest  = async () =>{
  const response = await client.get(`/products/lists/like`);
  if (response.status !== 200) {
    throw response.status;
  }
  console.log("응답",response);
  return response;
}

export const loadProduct = async( id : number ) =>{
  const response = await client.get(`/products/${id}`);
  if(response.status !== 200){
    throw response.status;
  }
  console.log("res", response);
  return response.data as GoodsProps;
}