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
  return (
    <>
      {data.length ? (
        <Section>
          <Wrapper>
            <ListTop>
              <TitleWapper>
                <span>{title}</span>
              </TitleWapper>
              <More>{/* <button>더보기</button> */}</More>
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
      ) : (
        <NotificationSection>상품이 없습니다</NotificationSection>
      )}
    </>
  );
};

const Section = styled.section`
  width: 940px;
  margin: 50px auto;
  height: 450px;
`;

const Wrapper = styled.div`
  height: 100%;
`;

const ListTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleWapper = styled.div`
  margin: 0 0 13px 13px;
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

const NotificationSection = styled.section`
  padding: 8rem 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2rem;

  p {
    font-size: 1rem;
    text-align: center;
    font-weight: 700;
  }
`;

export default ListGoods;
