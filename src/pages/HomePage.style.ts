import styled from 'styled-components/macro';
import bgImage from '../images/landing_page.jpeg';

export const HomePageWrapper = styled.div`
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
    background: url(${bgImage}) no-repeat center center fixed;
    background-size: 100%;
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
const fontSize = '6rem';

export const TextBlack = styled.div`
  color: #01265fff;
  font-family: aileronblack, serif;
  font-size: ${fontSize};
  line-height: ${lineHeight};
`;

export const TextBold = styled.div`
  color: #01265fff;
  font-family: aileronbold, serif;
  font-size: ${fontSize};
  line-height: ${lineHeight};
`;

export const TextBlackBlue = styled.div`
  color: #09aaea;
  font-family: aileronblack, serif;
  font-size: ${fontSize};
  line-height: ${lineHeight};
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

/*
 *
 * Text:
 Font Aileron Bold - cod culoare RGB(255,255,255) sau #ffffff
 "Am construit rețele electronice prin care circulă informația în întreaga lume
 și acum construiesc o rețea de încredere între gorjeni."
 *
 *
 Font Aileron Bold - cod culoare RGB(1,38,95) sau #01265f
 "Programari Audienţe"
 *
 *
 Font Aileron Regular - cod culoare RGB(1,38,95) sau #01265f
 "Cabinet Parlamentar
 Târgu Jiu,
 Str. Victoriei Nr. 2-4
 (la parterul Prefecturii Gorj)"
 * */
