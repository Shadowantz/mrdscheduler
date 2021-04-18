import styled, { css } from 'styled-components/macro';
import { flexAndCenteredItems, fontSizeAndPaddingForText } from './GeneralPages.style';
import bgImg from '../images/s2_bg.jpg';
// import bgImg from '../images/deleteMe2.jpeg';

const bgForPc = css`
  background: url(${bgImg}) no-repeat center center fixed;
`;
const bgForMobile = css`
  background: url(${bgImg}) no-repeat 88%;
`;

export const EventsPageWrapper = styled.div`
  ${flexAndCenteredItems};
  justify-content: center;
  height: 100vh;
  position: relative;

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

export const CalendarTitle = styled.div<{ isMobile: boolean }>`
  ${fontSizeAndPaddingForText};
  font-size: ${({ isMobile }) => (isMobile ? 1.4 : 3)}rem;
  text-align: center;
  padding: 3rem 0 1rem 0;
`;

export const CalendarContainer = styled.div`
  position: absolute;

  & .DayPicker-wrapper {
    width: ${({ isMobile }) => (isMobile ? 350 : 500)}px;
    background-color: #ffffff;
    font-size: ${({ isMobile }) => (isMobile ? 1.2 : 1.8)}rem;
    user-select: none;
    border-radius: 0.28571429rem;
    box-shadow: 0 0 5px 0;
  }

  & .DayPicker-Caption {
    text-transform: capitalize;
  }

  & .DayPicker-Day {
    padding: 0;
  }

  & .DayPicker-Day--today {
    color: inherit;
  }
`;

export const DayView = styled.div`
  font-size: 1.5rem;
`;

export const TitleTextContainer = styled.div`
  padding-top: 7rem;
  padding-left: 3rem;
`;

export const TitleText = styled.div`
  font-size: 2.68vw;
  line-height: 3.5vw;
  font-family: aileronbold, serif;
  color: white;
  text-shadow: -2px 2px 15px black;
`;

export const BlueLine = styled.div`
  width: 480px;
  padding: 3px;
  background-color: #09aaea;
  margin-top: 1rem;
`;

// const lineHeight = '6rem';
// const mobileLineHeight = '2rem';
// const fontSize = '4.5rem';
const mobileFontSize = '2rem';

export const TextContainer = styled.div`
  padding-left: 11rem;
`;

export const AddressTextBold = styled.div`
  color: #01265fff;
  font-family: aileronbold, serif;
  font-size: ${({ isMobile }) => (isMobile ? mobileFontSize : '5rem')};
  padding: 1rem 0;
`;

export const AddressTextRegular = styled.div`
  color: #01265fff;
  font-family: aileronregular, serif;
  font-size: ${({ isMobile }) => (isMobile ? mobileFontSize : '3.5rem')};
  margin-top: 2.8rem;
`;

export const AddressTextRegularSmall = styled.div`
  color: #01265fff;
  font-family: aileronregular, serif;
  font-size: ${({ isMobile }) => (isMobile ? mobileFontSize : '3rem')};
  margin-top: 2.8rem;
`;
