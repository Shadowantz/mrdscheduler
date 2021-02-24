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
  height: 720px;
`;

export const CalendarWrapper = styled.div`
  ${flexAndCenteredItems};

  & .rbc-toolbar-label {
    text-transform: capitalize;
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
    color: #999999;
  }
`;

export const CalendarTitle = styled.div`
  ${fontSizeAndPaddingForText}
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
  color: ${({ isWeekend }) => (isWeekend ? '#999999' : 'inherit')};
`;

export const StyledSegment = styled(Segment)`
  padding: 0 !important;
  border: none !important;
  height: 100%;
`;
