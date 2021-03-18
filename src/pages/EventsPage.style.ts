import styled from 'styled-components/macro';
import {
  flexAndCenteredItems,
  fontSizeAndAnchor,
  fontSizeAndPaddingForText,
} from './GeneralPages.style';
import { Label } from 'semantic-ui-react';

export const EventsPageWrapper = styled.div`
  ${flexAndCenteredItems};

  backdrop-filter: blur(5px);
  background-color: rgb(255 255 255 / 40%);
`;

export const CalendarTitle = styled.div<{ isMobile: boolean }>`
  ${fontSizeAndPaddingForText};
  font-size: ${({ isMobile }) => (isMobile ? 1.3 : 3)}rem;
  text-align: center;
  padding: 3rem 0 1rem 0;
`;

export const CalendarAddress = styled.div<{ isMobile: boolean }>`
  ${fontSizeAndAnchor};
  text-align: center;
  font-size: ${({ isMobile }) => (isMobile ? 1.1 : 2)}rem;
  padding: 1rem 0 2rem 0;
`;

export const CalendarContainer = styled.div`
  & .DayPicker-wrapper {
    width: 330px;
    background-color: #ffffffc9;
    font-size: 1.5em;
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

export const Legend = styled.div`
  margin: 1rem;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const LegendLabel = styled(Label)`
  box-shadow: 0 0 3px 0 black;
`;
