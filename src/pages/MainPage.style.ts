import styled from 'styled-components/macro';
import { Segment } from 'semantic-ui-react';
import {
  flexAndCenteredItems,
  fontSizeAndPaddingForText,
  fontSizeAndAnchor,
} from './GeneralPages.style';

export const MainPageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1280px;
  height: 100vh;
  margin: 0 auto;
`;

export const MainPageContainer = styled.div`
  width: 1280px;
  // height: 720px;

  & .menuItemsComponentWrap {
    background-color: #45abe4 !important;
  }
`;

export const CalendarWrapper = styled.div`
  ${flexAndCenteredItems};

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

export const CalendarTitle = styled.div`
  ${fontSizeAndPaddingForText};
  font-size: 3rem;
`;

export const CalendarAddress = styled.div`
  ${fontSizeAndAnchor}
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
`;

export const IconItem = styled.div`
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.9);

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
`;
