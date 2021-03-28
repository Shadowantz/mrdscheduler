import styled from 'styled-components/macro';
import { fontSizeAndAnchor } from './GeneralPages.style';
import mrImage2 from '../images/yellowImageBlended.png';

export const AboutMeContainer = styled.div<{ isMobile: boolean }>`
  height: 100vh;
  position: relative;

  &::after {
    position: absolute;
    content: '';
    ${({ isMobile }) => {
      if (isMobile) {
        return 'background: #aaae7e';
      }

      return `background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
      url(${mrImage2}) no-repeat center center fixed;`;
    }};

    background-size: cover;
    opacity: 1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const PlayerCover = styled.div<{ isMobile: boolean }>`
  & img {
    width: 100%;
  }

  & i {
    position: absolute;
    ${({ isMobile }) => isMobile && 'left: 50vw; top: 40%;'};
  }
`;

export const IframeWrap = styled.div`
  width: auto;
  height: auto;
`;

export const ContractPageRowWrapp = styled.div<{ isMobile: boolean }>`
  padding-top: ${({ isMobile }) => (isMobile ? 5 : 0)}rem;
`;

export const ContactPageRow = styled.div<{ isMobile: boolean }>`
  ${fontSizeAndAnchor};
  font-size: ${({ isMobile }) => (isMobile ? 1.4 : 2)}rem;
  padding: 1rem 0 1rem 0;
`;
