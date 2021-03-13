import styled from 'styled-components/macro';
import { Segment } from 'semantic-ui-react';
import {
  flexAndCenteredItems,
  fontSizeAndPaddingForText,
  fontSizeAndAnchor,
} from './GeneralPages.style';

import bgImage from '../images/background_pic_2.jpeg';

export const MainPageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;

  background: url(${bgImage}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  & > img {
    position: fixed;
    top: 0;
    left: 0;

    /* Preserve aspet ratio */
    min-width: 100%;
    min-height: 100%;
  }
`;

export const MainPageContainer = styled.div<{ isMobile: boolean }>`
  width: ${({ isMobile }) => (isMobile ? 400 : 1024)}px;
  top: 2rem;
  position: absolute;
  // height: 720px;

  & .menuItemsComponentWrap {
    background-color: #45abe4 !important;
  }
`;

export const CalendarWrapper = styled.div`
  ${flexAndCenteredItems};

  backdrop-filter: blur(5px);
  background-color: rgb(255 255 255 / 40%);

  & .rbc-toolbar-label {
    text-transform: capitalize;
  }

  & .rbc-date-cell.rbc-off-range {
    color: #c6c6c6;
  }

  & .rbc-row-content {
    .rbc-show-more,
    .rbc-event {
      display: none;
    }
  }

  & .rbc-allday-cell {
    display: none;
  }

  & .rbc-toolbar-label {
    font-size: 2rem;
  }

  & .rbc-header {
    font-size: 1.5rem;
    background-color: white;
    padding: 0.2rem;
  }

  & .rbc-btn-group,
  .rbc-time-slot {
    background-color: white;
  }

  & .weekendDay {
    background-color: #e6e6e6;
  }

  & .openDay {
    background-color: #21ba45;
  }

  & .blockedDay {
    background-color: #767676;
  }

  & .dayFull {
    background-color: #db2828;
  }
`;

export const CalendarTitle = styled.div<{ isMobile: boolean }>`
  ${fontSizeAndPaddingForText};
  font-size: ${({ isMobile }) => (isMobile ? 2 : 3)}rem;
  text-align: center;
`;

export const CalendarAddress = styled.div<{ isMobile: boolean }>`
  ${fontSizeAndAnchor};
  text-align: center;
  font-size: ${({ isMobile }) => (isMobile ? 1.5 : 2)}rem;
`;

export const DayWrappedForMonth = styled.div<{ isWeekend: boolean }>`
  width: 100%;
  height: 133px;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ isWeekend }) => (isWeekend ? '#c6c6c6' : 'inherit')};
`;

export const DayView = styled.div`
  font-size: 1.5rem;
`;

export const StyledSegment = styled(Segment)`
  padding: 0 !important;
  border: none !important;
  height: 100%;
  background: none !important;
`;

export const IconItem = styled.div<{ isMobile: boolean }>`
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.9);
  font-size: ${({ isMobile }) => (isMobile ? 1.2 : 2)}rem;
  font-weight: bold;

  & img {
    width: 56px;
    height: 50px;
    padding-left: 0.5rem;
  }
`;

export const Legend = styled.div`
  margin: 1rem;
  display: flex;
  justify-content: center;
  text-align: center;
`;
