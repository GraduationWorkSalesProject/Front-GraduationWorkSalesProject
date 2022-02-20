import React from 'react';
import Goods from '../goods/Goods';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GoodsProps } from '../../types/goods';

interface IProps {
  data: GoodsProps[];
  title: string;
}

const ListGoods = ({ data, title }: IProps) => {
  if (data.length === 0) {
    return <div>상품이 없습니다</div>;
  }
  return (
    <Section>
      <Wrapper>
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
          {data.map((item, idx) => (
            <Link to={`products/${item.id}`}>
              <Goods data={item} key={idx}></Goods>
            </Link>
          ))}
        </ListBottom>
      </Wrapper>
    </Section>
  );
};

const Section = styled.section`
  position: relative;
  width: 940px;
  margin: 50px auto;
  height: 1050px;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
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
  background-color: #5a5d5a;
`;

const ListBottom = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  margin-top: 35px;
`;

export default ListGoods;
