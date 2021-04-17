import styled, { css } from 'styled-components/macro';
import bgImage from '../images/landing_page.jpeg';

const bgForPc = css`
  background: url(${bgImage}) no-repeat center center fixed;
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
  color: white;

  &::after {
    position: absolute;
    content: '';
    ${({ isMobile }) => (isMobile ? bgForMobile : bgForPc)};
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
const MobileLineHeight = '3rem';
const fontSize = '6rem';
const MobileFontSize = '2rem';

export const TextBlack = styled.div<{ isMobile: boolean }>`
  color: #01265fff;
  font-family: aileronblack, serif;
  font-size: ${({ isMobile }) => (isMobile ? MobileFontSize : fontSize)};
  line-height: ${({ isMobile }) => (isMobile ? MobileLineHeight : lineHeight)};
`;

export const TextBold = styled.div<{ isMobile: boolean }>`
  color: #01265fff;
  font-family: aileronbold, serif;
  font-size: ${({ isMobile }) => (isMobile ? MobileFontSize : fontSize)};
  line-height: ${({ isMobile }) => (isMobile ? MobileLineHeight : lineHeight)};
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

export const Separator = styled.div`
  margin: 3vw;
  width: 100%;
`;
