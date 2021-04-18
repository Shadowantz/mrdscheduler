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

const lineHeight = '8rem';
const mobileLineHeight = '3rem';
const fontSize = '7rem';
const mobileFontSize = '2rem';

export const TextBlack = styled.div<{ isMobile: boolean }>`
  color: #01265fff;
  font-family: aileronblack, serif;
  font-size: ${({ isMobile }) => (isMobile ? mobileFontSize : fontSize)};
  line-height: ${({ isMobile }) => (isMobile ? mobileLineHeight : lineHeight)};
`;

export const TextBold = styled.div<{ isMobile: boolean }>`
  color: #01265fff;
  font-family: aileronbold, serif;
  font-size: ${({ isMobile }) => (isMobile ? mobileFontSize : fontSize)};
  line-height: ${({ isMobile }) => (isMobile ? mobileLineHeight : lineHeight)};
`;

export const TextBlackBlue = styled.div<{ isMobile: boolean }>`
  color: #09aaea;
  font-family: aileronblack, serif;
  font-size: ${({ isMobile }) => (isMobile ? '2.6rem' : fontSize)};
  line-height: ${({ isMobile }) => (isMobile ? '4rem' : lineHeight)};
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
    width: ${({ isMobile }) => (isMobile ? 277 : 919)}px;
    height: ${({ isMobile }) => (isMobile ? 300 : 845)}px;

    ${({ isMobile }) => !isMobile && notMobileLeftPictureCss};
  }
`;

export const LeftPictureText = styled.div<{ isMobile: boolean }>`
  position: absolute;
  width: ${({ isMobile }) => (isMobile ? '350px' : '100vw')};
  top: auto;
  left: ${({ isMobile }) => (isMobile ? 15 : 672)}px;
  bottom: ${({ isMobile }) => (isMobile ? -55 : 35)}px;
`;

export const RightPicture = styled.div<{ isMobile: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;

  & img {
    position: absolute;
    width: ${({ isMobile }) => (isMobile ? 300 : 547)}px;
    height: ${({ isMobile }) => (isMobile ? 300 : 478)}px;
    ${({ isMobile }) => {
      if (isMobile) {
        return `
          width: 250px;
          height: 250px;
          left: 0;
          margin: auto;
          right: 0;
          top: 3.2rem;`;
      }

      return `
      left: 254px;
      right: 0;
      top: 191px;`;
    }};
  }
`;
