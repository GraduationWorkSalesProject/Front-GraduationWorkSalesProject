import React, { useEffect, useState } from 'react';
import Goods from '../goods/Goods';
import styled from 'styled-components';
import { loadProductsBest, loadProductsRecent } from '../../api/product';
import { Link } from 'react-router-dom';

const ListGoods = (text:any) => {

  const [products,setProducts] = useState([]) 

  const loadRecentData =  async ( )=>{
    try{
      const response = await loadProductsRecent();  
      const temp:any = response.data;
      setProducts(temp.data);
    }catch(err){
      console.log(err);
    } 
  }

  const loadBestData = async () => {
    try{
      const response = await loadProductsBest();
      const temp:any = response.data;
      setProducts(temp.data);
    }catch(err){
      console.log(err);
    } 
  }

  useEffect(()=>{
    if(text.title==="New ITEMS"){
      loadRecentData();
    }
    else if(text.title==="Best ITEMS"){
      loadBestData();
    }
  },[])

  return(
    <Section>
      <ListTop>
        <TitleWapper>
          <span>{text.title}</span>
        </TitleWapper>
       <More>
         <button>더보기</button>
       </More>
      </ListTop>
      <Divide></Divide>
      <ListBottom> 
        {products.map((item,idx)=>(
          <Link to={`products/${item.id}`}>
            <Goods data={item} key={idx}></Goods> 
          </Link>
        ))}
      </ListBottom>
    </Section>
  
  );
}

const Section = styled.section`
  width: 940px;
  margin: 50px auto;
`;

const ListTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleWapper = styled.div`
  margin-bottom: 13px;
  & > span {
    font-size: 28px;
    margin-bottom: 20px;
  } 
`;

const More = styled.div`
  height: 10px;
  & > button {
    border: 0px;
    background-color: transparent;
    cursor: pointer;

  }
`;

const Divide = styled.div`
  width: 100%;
  height: 1px;
  background-color: #5A5D5A;
`;

const ListBottom = styled.div`
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  margin-top: 35px ;
`;

export default ListGoods;