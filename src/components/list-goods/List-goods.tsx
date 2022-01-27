import React, { useEffect, useState } from 'react';
import Goods from '../goods/Goods';
import styled from 'styled-components';
import { loadProductsRecent } from '../../api/product';

const ListGoods = () => {

  const [title, setTitle] = useState('New ITEMS');
  const [recent,setRecent] = useState([])
  const loadRecentData =  async ( )=>{
    try{
      const response = await loadProductsRecent();  
      const temp:any = response.data;
      setRecent(temp.data);
    }catch(err){
      console.log(err);
    } 
  }

  useEffect(()=>{
    loadRecentData();
  },[])

  return(
    <Section>
      <ListTop>
        <TitleWapper>
          <span>{title}</span>
        </TitleWapper>
       <More>
         <button>더보기</button>
       </More>
      </ListTop>
      <Divide></Divide>
      <ListBottom> 
        {recent.map((item,idx)=>(
          <Goods item={item} key={idx}/>
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