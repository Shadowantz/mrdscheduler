import styled from 'styled-components/macro';
import {
  flexAndCenteredItems,
  fontSizeAndAnchor,
  fontSizeAndPaddingForText,
} from './GeneralPages.style';
import bgImg from '../images/bg_programari2.jpeg';

export const EventsPageWrapper = styled.div`
  ${flexAndCenteredItems};
  justify-content: center;
  height: 100vh;
  position: relative;

  &::after {
    position: absolute;
    content: '';
    background: url(${bgImg}) no-repeat center center fixed;
    background-size: cover;
    opacity: 1;
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

export const CalendarAddress = styled.div<{ isMobile: boolean }>`
  ${fontSizeAndAnchor};
  text-align: center;
  font-size: ${({ isMobile }) => (isMobile ? 1.15 : 2)}rem;
  padding: 1rem 0 2rem 0;
`;

export const CalendarContainer = styled.div`
  & .DayPicker-wrapper {
    width: 500px;
    background-color: #ffffff;
    font-size: 1.8rem;
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
  padding-top: 6rem;
`;

export const TitleText = styled.div`
  font-size: 2.6vw;
  line-height: 4vw;
  font-family: aileronbold, serif;
  color: white;
  text-shadow: 4px 4px 6px black;
`;

export const BlueLine = styled.div`
  width: 352px;
  padding: 3px;
  background-color: #09aaea;
  margin-top: 1rem;
`;

const lineHeight = '6rem';
const fontSize = '4.5rem';

export const TextContainer = styled.div`
  padding-left: 6rem;
`;

export const AddressTextBold = styled.div`
  color: #01265fff;
  font-family: aileronbold, serif;
  font-size: ${fontSize};
  line-height: ${lineHeight};
`;

export const AddressTextRegular = styled.div`
  color: #01265fff;
  font-family: aileronregular, serif;
  font-size: ${fontSize};
  line-height: ${lineHeight};
`;
