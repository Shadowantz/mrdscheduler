import styled, { css } from 'styled-components/macro';
import { backgroundBorderTextColors } from '../pages/GeneralPages.style';

const openDay = css`
  background-color: ${backgroundBorderTextColors.openDay.bg};
  border: 3px solid ${backgroundBorderTextColors.openDay.border};
`;

const fullDay = css`
  background-color: ${backgroundBorderTextColors.fullDay.bg};
  border: 3px solid ${backgroundBorderTextColors.fullDay.border};
`;

const blockedDay = css`
  background-color: ${backgroundBorderTextColors.blockedDay.bg};
  border: 3px solid ${backgroundBorderTextColors.blockedDay.border};
  pointer-events: ${({ logInState }) => (logInState ? 'auto' : 'none')};
`;

export const DayWrapper = styled.div<{
  isFullDay: boolean;
  isWeekend: boolean;
  isBlockedDay: boolean;
  logInState: boolean;
}>`
  padding: 0.7vw;
  border-radius: 40%;
  margin: 2px;
  ${({ isFullDay, isWeekend, isBlockedDay }) => {
    if (isWeekend || isBlockedDay) return blockedDay;
    if (isFullDay) return fullDay;

    return openDay;
  }}
`;
