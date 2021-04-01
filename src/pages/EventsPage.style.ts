import styled from 'styled-components/macro';
import { Label } from 'semantic-ui-react';
import {
  flexAndCenteredItems,
  fontSizeAndAnchor,
  fontSizeAndPaddingForText,
} from './GeneralPages.style';

export const EventsPageWrapper = styled.div`
  ${flexAndCenteredItems};
  justify-content: center;
  height: 100vh;
  position: relative;

  &::after {
    position: absolute;
    content: '';
    height: 100vh;
    background: linear-gradient(rgb(122 122 122 / 73%), rgb(150 153 102));
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
  margin: 2rem;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const LegendLabel = styled(Label)`
  box-shadow: 0 0 3px 0 black;
`;
