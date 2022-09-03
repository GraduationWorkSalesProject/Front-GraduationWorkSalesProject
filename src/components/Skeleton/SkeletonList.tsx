import React from 'react';
import styled from 'styled-components';
import Skeleton from './Skeleton';

const SkeletonList = () => {
  return (
    <Container>
      {new Array(4).fill(0).map((item, index) => (
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
export default SkeletonList;
