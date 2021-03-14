import styled from 'styled-components/macro';
import {
  flexAndCenteredItems,
  fontSizeAndAnchor,
  fontSizeAndPaddingForText,
} from './GeneralPages.style';

export const EventsPageWrapper = styled.div`
  ${flexAndCenteredItems};

  backdrop-filter: blur(5px);
  background-color: rgb(255 255 255 / 40%);
`;

export const CalendarTitle = styled.div<{ isMobile: boolean }>`
  ${fontSizeAndPaddingForText};
  font-size: ${({ isMobile }) => (isMobile ? 1.3 : 3)}rem;
  text-align: center;
`;

export const CalendarAddress = styled.div<{ isMobile: boolean }>`
  ${fontSizeAndAnchor};
  text-align: center;
  font-size: ${({ isMobile }) => (isMobile ? 1.1 : 2)}rem;
`;

export const CalendarContainer = styled.div``;

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

export const Legend = styled.div`
  margin: 1rem;
  display: flex;
  justify-content: center;
  text-align: center;
`;

// & .weekendDay {
//   background-color: #e6e6e6;
// }
//
// & .openDay {
//   background-color: #21ba45;
// }
//
// & .blockedDay {
//   background-color: #767676;
// }
//
// & .dayFull {
//   background-color: #db2828;
// }
