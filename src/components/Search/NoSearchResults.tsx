import React from 'react';
import styled from 'styled-components';
import useBestItems from '../../hooks/useBestItems';
import SearchIcon from '../common/icons/SearchIcon';
import ListGoods from '../list-goods/List-goods';
import SkeletonList from '../Skeleton/SkeletonList';

const NoSearchResults = ({ search }: { search: string }) => {
  const { data, isLoading } = useBestItems();

  return (
    <>
      <NotificationSection>
        <SearchIcon />
        <p>{`${search}에 대한 검색 결과가 없습니다.`}</p>
      </NotificationSection>
      {isLoading ? (
        <SkeletonList />
      ) : (
        <RecommendSection>
          <ListGoods data={data.data} title="이런 작품은 어때요?" />
        </RecommendSection>
      )}
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
