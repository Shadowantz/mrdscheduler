import styled from 'styled-components/macro';
import { Container, Header } from 'semantic-ui-react';

import mrImage2 from '../images/imgYellow.png';

export const AboutMeContainer = styled.div<{ isMobile: boolean }>`
  position: relative;
  height: 100vh;
  width: 100vw;

  &::after {
    position: absolute;
    content: '';
    ${({ isMobile }) => {
      if (isMobile) {
        return 'background: rgba(1,38,95,0.85)';
      }

      return `background: linear-gradient(90deg, rgba(1,38,95,0.85) 0%, rgba(1,38,95,0.75) 45%, rgba(255,255,255,0) 60%),
      url(${mrImage2}) no-repeat center 100% fixed;`;
    }};

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

export const ContainerWrapper = styled(Container)<{ isMobile: boolean }>`
  margin-top: 12vh;
  color: white;
  height: ${({ isMobile }) => (isMobile ? 56 : 75)}vh;
  font-size: ${({ isMobile }) => !isMobile && '1.8rem !important'};
  font-family: aileronregular, serif !important;
  overflow: auto;
`;

export const SpecialHeader = styled(Header)`
  font-family: aileronbold, serif !important;
  font-size: 2rem;
  color: white !important;
`;
