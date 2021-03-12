import styled from 'styled-components/macro';

export const AboutBeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlayerCover = styled.div`
  width: auto;
  height: 680px;
  display: flex;

  & img {
    width: 1024px;
    position: absolute;
    left: 0;
  }

  & i {
    position: absolute;
    align-self: center;
  }
`;

export const IframeWrap = styled.div`
  width: auto;
  height: auto;
`;
