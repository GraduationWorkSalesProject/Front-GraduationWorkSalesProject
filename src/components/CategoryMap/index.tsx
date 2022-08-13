import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';
import ImgBox from './ImgBox';

function CategoryMap() {
  return (
    <Container>
      <CategoryWrapper>
        <Title>CATEGORY</Title>
        <ImgMapContainer>
          <div>
            <ImgDivisionRow>
              <ImgBox width={195} height={195} text="조명" num={0} />
              <ImgBox width={195} height={195} text="악세서리" num={1} />
            </ImgDivisionRow>
            <ImgBox width={420} height={350} text="의류" num={2} />
          </div>
          <ImgDivisionCol>
            <ImgBox width={470} height={340} text="공예품" num={3} />
            <ImgBox width={470} height={210} text="식품" num={4} />
          </ImgDivisionCol>
        </ImgMapContainer>
      </CategoryWrapper>
    </Container>
  );
}

export default CategoryMap;

const Container = styled.section`
  position: relative;
  width: 950px;
  height: 700px;
  margin: auto;
`;

const CategoryWrapper = styled.div`
  position: absolute;
  top: 0;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 28px;
  border-bottom: 1px solid #dcdcdc;
  color: #595959;
  padding-bottom: 12px;
  margin-bottom: 38px;
`;

const ImgMapContainer = styled.div`
  display: flex;
`;

const ImgDivisionRow = styled.div`
  display: flex;
`;

const ImgDivisionCol = styled.div`
  display: flex;
  flex-direction: column;
`;
