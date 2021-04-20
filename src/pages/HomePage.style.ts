import styled, { css } from 'styled-components/macro';
import bgImage from '../images/deleteMe.jpeg';

const bgForPc = css`
  background: url(${bgImage}) no-repeat center center;
`;
const bgForMobile = css`
  background: url(${bgImage}) no-repeat 88%;
`;

export const HomePageWrapper = styled.div<{ isMobile: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  color: white;

  &::after {
    position: absolute;
    content: '';
    // ${({ isMobile }) => (isMobile ? bgForMobile : bgForPc)};
    background-color: white;
    background-size: cover;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;

    @suports (-webkit-touch-callout: none) {
      background-attachment: scroll;
    }
  }
`;

const fontSize = '5.1vw';
const fontSizeMobile = '8.1vw';

export const TextBlack = styled.div<{ isMobile: boolean }>`
  color: #01265fff;
  font-family: aileronblack, serif;
  font-size: ${({ isMobile }) => (isMobile ? fontSizeMobile : fontSize)};
`;

export const TextBold = styled.div<{ isMobile: boolean }>`
  color: #01265fff;
  font-family: aileronbold, serif;
  font-size: ${({ isMobile }) => (isMobile ? fontSizeMobile : fontSize)};
  margin-top: ${({ isMobile }) => (isMobile ? '2vh' : '9vh')};
`;

export const TextBlackBlue = styled.div<{ isMobile: boolean }>`
  color: #09aaea;
  font-family: aileronblack, serif;
  font-size: ${({ isMobile }) => (isMobile ? fontSizeMobile : fontSize)};
  margin-top: ${({ isMobile }) => (isMobile ? '3vh' : '10vh')};
`;

export const Title = styled.div<{ isMobile: boolean }>`
  font-weight: bold;
  font-size: ${({ isMobile }) => (isMobile ? 3 : 7)}rem;
  text-align: center;
  line-height: ${({ isMobile }) => (isMobile ? 3 : 8)}rem;
  text-shadow: 0 8px 10px black;
`;

const notMobileLeftPictureCss = css`
  top: auto;
  bottom: 0;
`;

export const LeftPicture = styled.div<{ isMobile: boolean }>`
  width: 100%;
  height: 100%;
  position: relative;

  & img {
    position: absolute;
    height: auto;
    width: ${({ isMobile }) => (isMobile ? 70 : 48)}vw;
    left: ${({ isMobile }) => (isMobile ? 0 : -6)}vw;
    // height: ${({ isMobile }) => (isMobile ? 300 : 845)}px;
    ${({ isMobile }) => !isMobile && notMobileLeftPictureCss};
  }
`;

export const LeftPictureText = styled.div<{ isMobile: boolean }>`
  position: absolute;
  width: ${({ isMobile }) => (isMobile ? 95 : 60)}vw;
  height: ${({ isMobile }) => (isMobile ? 'auto' : '34vh')};
  left: ${({ isMobile }) => (isMobile ? '2' : '33.3')}vw;
  bottom: ${({ isMobile }) => (isMobile ? '-4vh' : '0')};
`;

export const RightPicture = styled.div<{ isMobile: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;

  & img {
    position: absolute;
    width: 32vw;
    height: auto;
    left: auto;
    top: auto;
    //left: 282px;
    //top: 223px;
    bottom: ${({ isMobile }) => (isMobile ? 5 : 30)}vh;
    right: ${({ isMobile }) => (isMobile ? 70 : 13)}vw;

    ${({ isMobile }) =>
      isMobile &&
      `
          width: 70vw;
          height: 35vh;
          left: 0;
          margin: auto;
          right: 0;
          top: 3.2rem;`};
  }
`;
