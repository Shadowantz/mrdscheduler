import styled from 'styled-components/macro';
import { flexAndCenteredItems, fontSizeAndAnchor } from './GeneralPages.style';

export const ContactPageWrapper = styled.div`
  justify-content: center;
  ${flexAndCenteredItems};
`;

export const ContactPageRow = styled.div<{ isMobile: boolean }>`
  ${fontSizeAndAnchor};
  font-size: ${({ isMobile }) => (isMobile ? 1.8 : 2)}rem;
  padding: 2rem 0 1rem 0;
`;
