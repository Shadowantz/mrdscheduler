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
