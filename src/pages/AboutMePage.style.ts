import styled from 'styled-components/macro';

export const AboutMeContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 14rem;
`;

export const PlayerCover = styled.div<{ isMobile: boolean }>`
  position: absolute;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  & img {
    width: ${({ isMobile }) => (isMobile ? 400 : 1024)}px;
  }

  & i {
    position: absolute;
  }
`;

export const IframeWrap = styled.div`
  width: auto;
  height: auto;
`;
