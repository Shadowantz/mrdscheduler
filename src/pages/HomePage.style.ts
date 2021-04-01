import styled from 'styled-components/macro';
import bgImage from '../images/istockphoto-1210184156-1024x1024.jpg';

export const HomePageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: white;
  padding: 0 1rem;

  &::after {
    position: absolute;
    content: '';
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(${bgImage}) no-repeat center center fixed;
    -webkit-background-size: 100%;
    -moz-background-size: 100%;
    -o-background-size: 100%;
    background-size: 100%;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    opacity: 0.8;
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

export const Subtitle = styled.div<{ isMobile: boolean }>`
  font-weight: bold;
  font-size: ${({ isMobile }) => (isMobile ? 2 : 2.5)}rem;
  text-align: center;
  line-height: ${({ isMobile }) => (isMobile ? 2 : 3)}rem;
  text-shadow: 0 4px 5px black;
`;
