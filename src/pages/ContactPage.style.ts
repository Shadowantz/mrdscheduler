import styled, { css } from 'styled-components/macro';

import bgContact from '../images/s4_bg.jpg';

const bgForPc = css`
  background: url(${bgContact}) no-repeat center 100% fixed;
`;
const bgForMobile = css`
  background: url(${bgContact}) no-repeat center;
`;

export const ContactPageWrapper = styled.div<{ isMobile: boolean }>`
  position: relative;
  height: 100vh;
  width: 100vw;

  &::after {
    position: absolute;
    content: '';
    ${({ isMobile }) => (isMobile ? bgForMobile : bgForPc)};
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

export const ContentWrapper = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const BlueZone = styled.div<{ isMobile: boolean }>`
  padding: 2rem;
  background-color: rgba(1, 38, 95, 0.6);
  border-radius: 20px;
  width: ${({ isMobile }) => (isMobile ? '95vw' : '60rem')};
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  ${({ isMobile }) => isMobile && 'flex-direction: column;'};
  box-shadow: 0 0 5px 0;

  & input,
  button {
    border-radius: 10px !important;
  }

  textarea {
    border-radius: 15px !important;
  }

  button {
    font-size: 1.3rem !important;
    color: white !important;
    background: #09aaea !important;
  }
`;

export const FormSection = styled.span<{ isMobile: boolean }>`
  width: ${({ isMobile }) => (isMobile ? '95vw' : '30vw')};
  font-size: ${({ isMobile }) => (isMobile ? '95vw' : '1.7vw')};
`;

export const TextSection = styled.span<{ isMobile: boolean }>`
  margin-right: ${({ isMobile }) => (isMobile ? 0 : '3rem')};
  ${({ isMobile }) => isMobile && 'padding-bottom: 1.5rem'};
  width: ${({ isMobile }) => (isMobile ? '95vw' : '40vw')};
`;

export const TextSectionText = styled.span`
  color: white;
  font-family: aileronregular, serif !important;
  font-size: ${({ isMobile }) => (isMobile ? '7.8vw' : '1.8vw')};

  line-height: 3rem;
`;

export const TextAndImage = styled.div`
  & i {
    color: #09aaea;
    font-size: 2.1rem;
  }
`;
