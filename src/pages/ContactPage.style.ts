import styled from 'styled-components/macro';

import mr from '../images/mr.jpg';

export const ContactPageWrapper = styled.div`
  height: 100vh;
  position: relative;

  &::after {
    position: absolute;
    content: '';
    ${({ isMobile }) => {
      if (isMobile) {
        return `background: linear-gradient(rgb(255 255 255), rgb(123 123 123 / 30%),  rgb(0 0 0 / 0%)), url(${mr}) no-repeat center 100% fixed`;
      }

      return `background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
      url(${mr}) no-repeat center center fixed;`;
    }};

    background-size: ${({ isMobile }) => (isMobile ? 'contain' : 'cover')};
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

export const ContractPageRowWrapp = styled.div<{ isMobile: boolean }>`
  padding-top: ${({ isMobile }) => (isMobile ? 10 : 0)}rem;
`;
