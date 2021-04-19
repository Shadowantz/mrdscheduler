import styled, { css } from 'styled-components/macro';
import { flexAndCenteredItems } from './GeneralPages.style';
import bgImg from '../images/s2_bg.jpg';
import bgImgMobile from '../images/s2_bg_mobile.jpg';

const bgForPc = css`
  background: url(${bgImg}) no-repeat center center fixed;
`;
const bgForMobile = css`
  background: url(${bgImgMobile}) no-repeat 88%;
`;

export const EventsPageWrapper = styled.div`
  ${flexAndCenteredItems};
  justify-content: center;
  height: 100vh;
  width: 100vw;
  position: relative;

  &::after {
    position: absolute;
    content: '';
    ${({ isMobile }) => (isMobile ? bgForMobile : bgForPc)};
    background-size: ${({ isMobile }) => (isMobile ? 'cover' : 'cover')};
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

export const CalendarContainer = styled.div<{ isMobile: boolean }>`
  ${({ isMobile }) => !isMobile && 'padding-left: 3vw'};
  ${({ isMobile }) => isMobile && 'left: 0; right: 0; margin: auto; text-align: center'};

  & .DayPicker-wrapper {
    width: ${({ isMobile }) => (isMobile ? 95 : 28)}vw;
    background-color: #ffffff;
    font-size: ${({ isMobile }) => (isMobile ? 6 : 1.5)}vw;
    user-select: none;
    border-radius: 0.28571429rem;
    box-shadow: 0 0 5px 0;
    margin-top: ${({ isMobile }) => (isMobile ? '2vh' : 0)};
  }

  & .DayPicker-Caption {
    text-transform: capitalize;
  }

  & .DayPicker-Day {
    padding: 0;

    & > div {
      ${({ isMobile }) => isMobile && ' padding: 1.2vw;'};
    }
  }

  & .DayPicker-Day--today {
    color: inherit;
  }
`;

export const TitleTextContainer = styled.div<{ isMobile: boolean }>`
  margin-top: ${({ isMobile }) => (isMobile ? 0 : 5.1)}vh;
  margin-left: ${({ isMobile }) => !isMobile && '3vw'};
`;

export const TitleText = styled.div<{ isMobile: boolean; showPadding: boolean }>`
  font-size: ${({ isMobile }) => (isMobile ? 6.2 : 2.66)}vw;
  padding-top: ${({ showPadding, isMobile }) => showPadding && !isMobile && '4.5vh'};
  font-family: aileronbold, serif;
  color: white;
  text-shadow: -2px 2px 15px black;
`;

export const BlueLine = styled.div<{ isMobile: boolean }>`
  width: ${({ isMobile }) => (isMobile ? '90vw' : '25vw')};
  padding: 3px;
  background-color: #09aaea;
  margin-top: ${({ isMobile }) => (isMobile ? 2.5 : 4.5)}vh;
`;

export const TextContainer = styled.div<{ isMobile: boolean }>`
  padding-left: ${({ isMobile }) => (isMobile ? 2 : 7.6)}vw;
  height: ${({ isMobile }) => (isMobile ? 'auto' : 'auto')};
`;

export const AddressTextBold = styled.div`
  color: #01265fff;
  font-family: aileronbold, serif;
  font-size: ${({ isMobile }) => (isMobile ? '8.6vw' : '3.68vw')};
  padding: 0;
`;

export const AddressTextRegular = styled.div`
  color: #01265fff;
  font-family: aileronregular, serif;
  font-size: ${({ isMobile }) => (isMobile ? '7.6vw' : '2.6vw')};
  margin-top: ${({ isMobile }) => (isMobile ? '1.5vh' : '4.8vh')};
`;

export const AddressTextRegularSmall = styled.div`
  color: #01265fff;
  font-family: aileronregular, serif;
  font-size: ${({ isMobile }) => (isMobile ? '5.6vw' : '2.09vw')};
  margin-top: ${({ isMobile }) => (isMobile ? '1.5vh' : '3.5vh')};
`;
