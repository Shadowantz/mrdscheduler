import styled from 'styled-components/macro';
import { Icon, Menu } from 'semantic-ui-react';

import { generalContentWidth } from './GeneralPages.style';

export const MainPageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 400vh;
`;

export const MenuWrapper = styled(Menu)<{ isMobile: boolean }>`
  ${generalContentWidth};
  background: transparent !important;
  position: absolute !important;
  top: ${({ isMobile }) => (isMobile ? 0 : 3)}vh;
  margin: 0 !important;
  justify-content: center;
`;

export const HamburgerIcon = styled(Menu.Item)<{ isMobile: boolean }>`
  padding: 5px 0 5px 15px !important;
  font-size: 1.6rem;
`;

export const StyledMobileHamburger = styled(Icon)`
  color: #01265fff;
`;

export const IconItem = styled.div<{ isMobile: boolean }>`
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.9) !important;
  font-size: ${({ isMobile }) => (isMobile ? 1 : 2)}rem;
  font-weight: bold;

  & a {
    color: rgba(255, 255, 255, 0.9) !important;
  }

  & img {
    width: ${({ isMobile }) => (isMobile ? 120 : 390)}px;
    height: ${({ isMobile }) => (isMobile ? 60 : 70)}px;
    padding-left: 0.5rem;
  }
`;

export const MobileMenuItem = styled(Menu.Item)`
  padding: 5px 10px 5px 10px;
`;

export const DefaultMenuItem = styled(Menu.Item)`
  font-size: 1.4rem;
`;

export const SidebarIconWrapper = styled.div`
  position: fixed;
  right: 0;
  bottom: 35px;
  width: 60px;
  height: 50px;
  padding: 5px 10px;
  backdrop-filter: blur(2px);
  background-color: rgb(255 255 255 / 40%);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  transition: all 0.7s;

  & :hover {
    width: 80px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  img {
    width: 40px;
  }
`;

export const Section = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 0;
`;

export const MenuItemAnchor = styled.span<{ isMobile: boolean }>`
  color: #01265fff !important;
  font-family: aileronsemibold, serif;
  font-size: ${({ isMobile }) => (isMobile ? 1.4 : 2.3)}rem;
`;

export const AlignTextOnCenter = styled.div`
  text-align: center;
`;

export const RotatePhone = styled.div`
  width: 100vw;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  background: white;
  font-family: aileronsemibold, serif;
  font-size: 5vw;
  color: #01265fff !important;

  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    width: 100px;
    height: auto;
    margin-right: 2rem;
  }
`;
