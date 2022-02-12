import { auth, client } from './axios';

export const likeProduct = async(id:number) =>{
    const response:any = await auth.post(`/products/${id}/like`); 
    if(response.status !== 200){  
      throw response.status;
    } 
    return response.data;
}

export const loadLikeCount = async(id:number) =>{
    const response:any = await client.get(`/products/${id}/likes`); 
    console.log('얏호',response)
    if(response.status !== 200){  
        throw response.status;
    } 
    return response.data;
}

 