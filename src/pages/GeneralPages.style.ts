import { css } from 'styled-components/macro';

export const flexAndCenteredItems = css`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
`;

export const fontSizeAndPaddingForText = css`
  font-size: 2rem;
  padding: 1rem 0;
`;

export const fontSizeAndAnchor = css`
  ${fontSizeAndPaddingForText}
  & a {
    text-decoration: underline;
    color: inherit;
  }
`;

export const backgroundBorderTextColors = {
  openDay: {
    bg: '#DFF1F5',
    border: '#09aaea',
  },
  fullDay: {
    bg: '#db282854',
    border: '#db2828',
  },
  blockedDay: {
    bg: '#76767666',
    border: '#767676',
  },
};

export const generalContentWidth = css`
  width: ${({ isMobile }) => (isMobile ? '370px !important' : '85vw !important')};
`;
