import React from 'react';
import styled from 'styled-components';
import useBestItems from '../../hooks/useBestItems';
import SearchIcon from '../common/icons/SearchIcon';
import Skeleton from '../common/Skeleton';
import ListGoods from '../list-goods/List-goods';

const NoSearchResults = ({ search }: { search: string }) => {
  const { product, loading, responseOK } = useBestItems();
  const getSkeletonUI = () => (
    <>
      <Skeleton type="TEXT" size="MEDIUM" width="14rem" margin="1rem 2rem" />
    </>
  );
  return (
    <>
      <NotificationSection>
        <SearchIcon />
        <p>{`${search}에 대한 검색 결과가 없습니다.`}</p>
      </NotificationSection>
      <RecommendSection>
        {loading ? (
          getSkeletonUI()
        ) : (
          <ListGoods data={product} title="이런 작품은 어때요?" />
        )}
      </RecommendSection>
    </>
  );
};
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

const RecommendSection = styled.section`
  padding: 1rem 2rem;
`;
export default NoSearchResults;
