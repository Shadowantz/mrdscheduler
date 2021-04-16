import styled from 'styled-components/macro';

import bgContact from '../images/bg_contact.jpg';

export const ContactPageWrapper = styled.div`
  height: 100vh;
  position: relative;

  &::after {
    position: absolute;
    content: '';
    ${({ isMobile }) => {
      if (isMobile) {
        return `background: linear-gradient(rgb(255 255 255), rgb(123 123 123 / 30%),  rgb(0 0 0 / 0%)),
        url(${bgContact}) no-repeat center 100% fixed`;
      }

      return `background: url(${bgContact}) no-repeat center 100% fixed;`;
    }};

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

export const BlueZone = styled.div`
  padding: 2rem;
  background-color: rgba(1, 38, 95, 0.6);
  border-radius: 20px;
  width: 60rem;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
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

export const FormSection = styled.span`
  width: 20rem;
`;

export const TextSection = styled.span`
  width: 26rem;
  margin-right: 3rem;
`;

export const TextSectionText = styled.span`
  color: white;
  font-family: aileronregular, serif !important;
  font-size: 2rem;
  line-height: 3rem;
`;

export const TextAndImage = styled.div`
  & i {
    color: #09aaea;
    font-size: 2.1rem;
  }
`;
