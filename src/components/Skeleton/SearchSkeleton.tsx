import React from 'react';
import styled from 'styled-components';
import Skeleton from './Skeleton';

const ITEMS = [1, 2, 3, 4];

const SearchSkeleton = () => {
  return (
    <Container>
      {ITEMS.map((item, index) => (
        <Skeleton
          key={index}
          type="CARD"
          size="X_LARGE"
          width="14rem"
          height="13rem"
          margin="0 1rem"
        />
      ))}
    </Container>
  );
};
const Container = styled.div`
  width: 940px;
  margin: 130px auto;
  display: flex;
`;
export default SearchSkeleton;
