import styled from 'styled-components/macro';
import { Menu, Segment } from 'semantic-ui-react';

import { generalContentWidth } from './GeneralPages.style';

import bgImage from '../images/background_pic_2.jpeg';

export const MainPageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 400vh;

  background: url(${bgImage}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  & > img {
    position: fixed;
    top: 0;
    left: 0;

    /* Preserve aspet ratio */
    min-width: 100%;
    min-height: 100%;
  }
`;

export const MainPageBlurBackground = styled.div`
  position: absolute;
  ${generalContentWidth};
  height: 300vh;
  margin-top: 111vh;

  backdrop-filter: blur(5px);
  background-color: rgb(255 255 255 / 40%);
`;

export const MenuWrapper = styled(Menu)`
  ${generalContentWidth};
  background-color: #45abe4 !important;
  position: fixed;
  top: 0;
`;

export const StyledSegment = styled(Segment)`
  padding: 0 !important;
  border: none !important;
  height: 100%;
  background: none !important;
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
    width: 56px;
    height: 50px;
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
  bottom: 100px;
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
