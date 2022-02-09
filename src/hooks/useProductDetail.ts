import { GoodsProps } from './../types/goods';
import { loadProduct } from './../api/product';
import {  useState } from 'react';  
import { useParams } from 'react-router-dom'; 
import useRequest from './useRequest';

interface IParam {
    id: string;
}

const useProductDetail = () => { 
    const { id }:IParam  = useParams();
    const [product, setProduct] = useState<GoodsProps>();

    const { loading, responseOK } = useRequest(async () => { 
        const productId = Number(id);  
        const response = await loadProduct(productId); 
        setProduct(response.data); 
      });
     
    return { product, loading, responseOK };
};

export default useProductDetail;
