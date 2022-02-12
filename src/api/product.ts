import { AxiosResponse } from 'axios';
import { ProductResponse } from './../types/goods';
import { client, auth } from './axios';
import { Client } from './http'; 
 
interface Flag {
  data: object;
  code: string;
  status: number;
}

export const AddProductApi = async (form: any) => {
  const response = await Client.post('/products', form, 'multipart/form-data'); 
  return response;
};

export const loadProductsRecent  = async () =>{
  const response = await client.get(`/products/lists/recent`);
  if (response.status !== 200) {
    throw response.status;
  }
  console.log("res",response);
  return response;
}

export const loadProductsBest  = async () =>{
  const response = await client.get(`/products/lists/like`);
  if (response.status !== 200) {
    throw response.status;
  }
  console.log("res",response);
  return response;
}

export const loadProduct = async( id : number ) =>{
  const response = await client.get<ProductResponse>(`/products/${id}`);
  if(response.status !== 200){
    throw response.status;
  }
  console.log("res", response);
  return response.data;
}

export const searchProduct = async(keyword:string,sort:string, page:number) =>{
  const response = await client.post(`/products`,{
    keyword,
    sort,
    page
  });
  if(response.status !== 200){
    throw response.status;
  }
  console.log("res", response);
  return response.data;
}

export const likeProduct = async(id:number) =>{
  const response:any = await auth.post(`/products/${id}/like`); 
  if(response.status !== 200){  
    throw response.status;
  } 
  return response.data;
}