import styled from 'styled-components';
import { CATEGORYIMAGES } from '../../utils/constants';
import { getParametersForUnsplash } from '../../utils/getParametersForUnsplash';

type imgBoxProps = {
  width: number;
  height: number;
  text: string;
  num: number;
};

function ImgBox({ width, height, text, num }: imgBoxProps) {
  const multiplyWidth = width * 2;
  const multiplyHeight = height * 2;
  return (
    <Wrapper>
      <ImgItem
        width={width}
        height={height}
        src={
          CATEGORYIMAGES[num] +
          getParametersForUnsplash({
            width: multiplyWidth,
            height: multiplyHeight,
            quality: 'auto',
            format: 'jpg',
          })
        }
        alt="categorythumbnail"
      />
      <CategoryTag>#{text}</CategoryTag>
    </Wrapper>
  );
}

export default ImgBox;

const Wrapper = styled.div`
  position: relative;
  margin: 0 15px 35px 15px;
`;

const ImgItem = styled.img`
  display: block;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  object-fit: cover;
  filter: brightness(50%);

  :hover {
    filter: brightness(95%);
  }
`;

const CategoryTag = styled.strong`
  position: absolute;
  white-space: nowrap;
  font-size: 26px;
  font-weight: 400;
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* transform: translateX(40%); */
`;
