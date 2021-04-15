import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';

import * as S from './MainPage.style';

import EventsPage from './EventsPage';
import AboutMePage from './AboutMePage';
import ContactPage from './ContactPage';
import HomePage from './HomePage';
import NotificationsModal from '../components/NotificationsModal';

import { authStateChangeEvent, logInAction, logOutAction } from '../utils/utils';
import usr from '../images/logo.png';
import facebookImg from '../images/fb_icon.png';

function App() {
  const dispatch = useDispatch();
  const isLogInRoute = useRouteMatch('/login', { string: true });
  const isLogOutRoute = useRouteMatch('/logout', { strict: true });
  const logInState = useSelector((state) => state.mainPage.logInState);

  const isMobile = useSelector((state) => state.mainPage.isMobile);
  const [activeItem, setActiveItem] = useState('home');
  const [activeSidebar, setActiveSidebar] = useState(false);

  useEffect(authStateChangeEvent(dispatch), []); // eslint-disable-line

  useEffect(() => {
    if (isLogInRoute) {
      logInAction(dispatch);
    }
    if (isLogOutRoute) {
      logOutAction(dispatch, false);
    }
  }, [isLogInRoute, isLogOutRoute]); // esling-disable-line

  const renderMobileSidebar = () => (
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      onHide={() => setActiveSidebar(false)}
      vertical
      visible={activeSidebar}
      width="thin"
    >
      <Menu.Item
        as="a"
        href="#about"
        onClick={() => {
          setActiveSidebar(false);
          setActiveItem('about');
        }}
      >
        <div>Despre mine</div>
      </Menu.Item>
      <Menu.Item
        as="a"
        onClick={() => {
          setActiveSidebar(false);
          window.open(
            'https://drive.google.com/viewerng/viewer?embedded=true&url=http://www.cdep.ro/camera_deputatilor/deputati/cv/7271.pdf',
            '_blank',
          );
        }}
      >
        CV
      </Menu.Item>
      <Menu.Item
        as="a"
        onClick={() => {
          setActiveSidebar(false);
          if (logInState) {
            return logOutAction(dispatch, false);
          }

          return logInAction(dispatch);
        }}
      >
        {logInState ? 'Log Out' : 'Log In'}
      </Menu.Item>
      <Menu.Item
        as="a"
        href="#contact"
        onClick={() => {
          setActiveSidebar(false);
          setActiveItem('contact');
        }}
      >
        Contact
      </Menu.Item>
    </Sidebar>
  );

  const renderTopBar = () => (
    <S.MenuWrapper isMobile={isMobile} inverted borderless>
      {isMobile ? (
        <Menu.Item
          name="menuBtn"
          position="left"
          style={{ padding: '5px 5px 5px 20px' }}
          onClick={() => setActiveSidebar((prevState) => !prevState)}
          content={<Icon name="bars" />}
        />
      ) : null}

      <S.MobileMenuItem
        name="home"
        position="left"
        style={{ padding: isMobile ? '10px 0' : 'auto', color: 'red' }}
        onClick={() => {
          setActiveItem('home');
          window.location.href = '#home';
        }}
        content={
          <S.IconItem isMobile={isMobile}>
            <img src={usr} alt="party sign" />
          </S.IconItem>
        }
      />

      <S.MobileMenuItem
        position="right"
        style={{
          padding: isMobile ? '5px 10px 5px 10px' : 'auto',
          fontSize: isMobile ? 'auto' : '1.5rem',
        }}
        active={activeItem === 'eventsPage'}
        onClick={() => {
          setActiveItem('eventsPage');
          window.location.href = '#eventsPage';
        }}
        content={<S.MenuItemAnchor>Programări audiențe</S.MenuItemAnchor>}
      />

      {isMobile ? null : (
        <>
          <S.DefaultMenuItem
            href="#about"
            active={activeItem === 'about'}
            onClick={(event) => {
              if (event.ctrlKey) {
                event.preventDefault();
                logInAction(dispatch);
              }

              if (event.altKey) {
                event.preventDefault();
                logOutAction(dispatch, false);
              }

              setActiveItem('about');
            }}
            content={<S.MenuItemAnchor>Despre mine</S.MenuItemAnchor>}
          />

          <S.DefaultMenuItem
            active={activeItem === 'cv'}
            onClick={() => {
              window.open(
                'https://drive.google.com/viewerng/viewer?embedded=true&url=http://www.cdep.ro/camera_deputatilor/deputati/cv/7271.pdf',
                '_blank',
              );
            }}
            content={<S.MenuItemAnchor>CV</S.MenuItemAnchor>}
          />

          <S.DefaultMenuItem
            href="#contact"
            active={activeItem === 'contact'}
            onClick={() => {
              setActiveItem('contact');
            }}
            content={<S.MenuItemAnchor>Contact</S.MenuItemAnchor>}
          />
        </>
      )}
    </S.MenuWrapper>
  );

  return (
    <S.MainPageWrapper>
      <S.Section id="home">
        <HomePage />
      </S.Section>
      <S.Section id="eventsPage">
        <EventsPage />
      </S.Section>
      <S.Section id="about">
        <AboutMePage />
      </S.Section>
      <S.Section id="contact">
        <ContactPage />
      </S.Section>

      <S.SidebarIconWrapper>
        <a href="http://www.facebook.com/miruta.ro" rel="noreferrer" target="_blank">
          <img src={facebookImg} alt="facebook sign" />
        </a>
      </S.SidebarIconWrapper>

      {renderTopBar()}
      {renderMobileSidebar()}
      <NotificationsModal />
    </S.MainPageWrapper>
  );
}

export default App;
