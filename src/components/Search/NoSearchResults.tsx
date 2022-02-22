import React from 'react';
import styled from 'styled-components';
import SearchIcon from '../common/icons/SearchIcon';

const NoSearchResults = ({ search }: { search: string }) => {
  return (
    <NotificationSection>
      <SearchIcon />
      <p>{`${search}에 대한 검색 결과가 없습니다.`}</p>
    </NotificationSection>
  );
};
const NotificationSection = styled.section`
  padding: 7rem 2rem;

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
export default NoSearchResults;
