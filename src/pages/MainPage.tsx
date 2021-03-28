import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';

import * as S from './MainPage.style';

import EventsPage from './EventsPage';
import AboutMePage from './AboutMePage';
import HomePage from './HomePage';
import NotificationsModal from '../components/NotificationsModal';

import { authStateChangeEvent, logInAction, logOutAction } from '../utils/utils';
import usr from '../images/usr.png';
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

      <S.SidebarIconWrapper>
        <a href="http://www.facebook.com/miruta.ro" rel="noreferrer" target="_blank">
          <img src={facebookImg} alt="facebook sign" />
        </a>
      </S.SidebarIconWrapper>

      <S.MenuWrapper isMobile={isMobile} inverted borderless size="huge">
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
          style={{ padding: isMobile ? '10px 0' : 'auto' }}
          onClick={() => {
            setActiveItem('home');
            window.location.href = '#home';
          }}
          content={
            <S.IconItem isMobile={isMobile}>
              <div>Radu Mirută</div>
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
          content={<div> Programări audiență </div>}
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
              content={<a href="#about"> Despre mine </a>}
            />

            <S.DefaultMenuItem
              active={activeItem === 'cv'}
              onClick={() => {
                window.open(
                  'https://drive.google.com/viewerng/viewer?embedded=true&url=http://www.cdep.ro/camera_deputatilor/deputati/cv/7271.pdf',
                  '_blank',
                );
              }}
              content={<a href="#cv"> CV </a>}
            />
          </>
        )}
      </S.MenuWrapper>

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
          Log In
        </Menu.Item>
      </Sidebar>
      <NotificationsModal />
    </S.MainPageWrapper>
  );
}

export default App;
