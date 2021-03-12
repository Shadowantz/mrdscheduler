import styled from 'styled-components/macro';
import { flexAndCenteredItems, fontSizeAndAnchor } from './GeneralPages.style';

export const ContactPageWrapper = styled.div`
  justify-content: center;
  ${flexAndCenteredItems};
  backdrop-filter: blur(5px);
  background-color: rgb(255 255 255 / 40%);
`;

export const ContactPageRow = styled.div`
  ${fontSizeAndAnchor}
`;
