import styled from 'styled-components/macro';

export const MainPageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CalendarWrapper = styled.div`
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

export const DayWrappedForMonth = styled.div<{ isWeekend: boolean }>`
  width: 100%;
  height: 70px;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ isWeekend }) => (isWeekend ? '#999999' : 'inherit')};
`;
