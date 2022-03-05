// ImagePicker.tsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { images } from '../../data/images';

function Carousel({ autoflow = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const TOTAL_SLIDE = images.length;
  // 기본으로 0번째 인덱스에 위치한 사진을 렌더링

  React.useLayoutEffect(() => {
    const intervalId = setInterval(() => {
      if (TOTAL_SLIDE === currentIndex + 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, autoflow);
    return () => clearTimeout(intervalId);
  }, [setCurrentIndex, currentIndex]);

  return (
    <Container>
      <FillImage src={images[currentIndex]} alt="caroueslImg" />
    </Container>
  );
}

export default Carousel;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 360px;
`;

const FillImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  object-fit: cover;
`;
