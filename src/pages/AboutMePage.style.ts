import styled from 'styled-components/macro';
import { fontSizeAndAnchor } from './GeneralPages.style';

export const AboutMeContainer = styled.div`
  height: 100vh;
  //background: linear-gradient(
  //  0deg,
  //  rgb(157 156 159) 0%,
  //  rgb(255 255 255) 50%,
  //  rgb(255 255 255) 100%
  //);
`;

export const PlayerCover = styled.div<{ isMobile: boolean }>`
  & img {
    width: 100%;
  }

  & i {
    position: absolute;
  }
`;

export const IframeWrap = styled.div`
  width: auto;
  height: auto;
`;

export const ContactPageRow = styled.div<{ isMobile: boolean }>`
  ${fontSizeAndAnchor};
  font-size: ${({ isMobile }) => (isMobile ? 1.8 : 2)}rem;
  padding: 2rem 0 1rem 0;
`;
