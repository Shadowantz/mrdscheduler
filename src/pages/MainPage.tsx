import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, useHistory } from 'react-router-dom';
import { Icon, Menu, Sidebar, Sticky } from 'semantic-ui-react';

import * as S from './MainPage.style';

import EventsPage from './EventsPage';
import AboutMePage from './AboutMePage';
import ContactPage from './ContactPage';
import NotificationsModal from '../components/NotificationsModal';

import { authStateChangeEvent, logInAction, logOutAction } from '../utils/utils';
import usr from '../images/usr.png';
import bgImage from '../images/background_pic_2.jpeg';
import facebookImg from '../images/fb_icon.png';

function App() {
  const dispatch = useDispatch();
  const logInState = useSelector((state) => state.mainPage.logInState);
  const isMobile = useSelector((state) => state.mainPage.isMobile);

  const [activeItem, setActiveItem] = useState('home');
  const [activeSidebar, setActiveSidebar] = useState(false);
  const history = useHistory();

  useEffect(authStateChangeEvent(dispatch), []); // eslint-disable-line

  return (
    <S.MainPageWrapper>
      <img src={bgImage} alt="cover illustration" />

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
          onClick={() => {
            setActiveItem('about');
            history.push('/about');
            setActiveSidebar(false);
          }}
        >
          <div>Despre mine</div>
        </Menu.Item>
        <Menu.Item
          as="a"
          onClick={() => {
            setActiveSidebar(false);
            window.open('http://www.cdep.ro/camera_deputatilor/deputati/cv/7271.pdf', '_blank');
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
        <Menu.Item
          as="a"
          onClick={() => {
            setActiveItem('contact');
            history.push('/contact');
            setActiveSidebar(false);
          }}
        >
          Contact
        </Menu.Item>
      </Sidebar>

      <S.MainPageContainer isMobile={isMobile}>
        <Menu attached="top" tabular size="huge" inverted className="menuItemsComponentWrap">
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
            name="RADU"
            position="left"
            style={{ padding: isMobile ? '10px 0' : 'auto' }}
            onClick={() => {
              setActiveItem('home');
              history.push('/home');
            }}
            content={
              <S.IconItem isMobile={isMobile}>
                <span>Radu Mirută</span>
                <img src={usr} alt="party sign" />
              </S.IconItem>
            }
          />

          <S.MobileMenuItem
            name="eventsPage"
            position="right"
            style={{ padding: isMobile ? '5px 10px 5px 10px' : 'auto' }}
            active={activeItem === 'eventsPage'}
            onClick={() => {
              setActiveItem('eventsPage');
              history.push('/eventsPage');
            }}
            content={<div> Programări audiență </div>}
          />

          {isMobile ? null : (
            <>
              <Menu.Item
                name="despre mine"
                active={activeItem === 'about'}
                onClick={() => {
                  setActiveItem('about');
                  history.push('/about');
                }}
              />

              <Menu.Item
                name="CV"
                active={activeItem === 'cv'}
                onClick={() => {
                  if (isMobile) {
                    // @ts-ignore
                    window.location = 'intent:https://example.com#Intent;end';
                  } else {
                    window.open(
                      'http://www.cdep.ro/camera_deputatilor/deputati/cv/7271.pdf',
                      isMobile ? undefined : '_blank',
                    );
                  }
                  // https://drive.google.com/viewerng/viewer?embedded=true&url=####
                }}
              />

              <Menu.Item
                name={((): string => (logInState ? 'LogOut' : 'LogIn'))()}
                active={activeItem === 'log'}
                onClick={() => {
                  if (logInState) {
                    return logOutAction(dispatch, false);
                  }

                  return logInAction(dispatch);
                }}
              />

              <Menu.Item
                name="contact"
                active={activeItem === 'contact'}
                onClick={() => {
                  setActiveItem('contact');
                  history.push('/contact');
                }}
              />
            </>
          )}
        </Menu>

        <S.StyledSegment attached="bottom">
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>

          <Route exact path="/eventsPage">
            <EventsPage />
          </Route>

          <Route exact path="/contact">
            <ContactPage />
          </Route>

          <Route exact path="/about">
            <AboutMePage />
          </Route>
        </S.StyledSegment>
        <NotificationsModal />
      </S.MainPageContainer>
      <Sticky>
        <S.SidebarIconWrapper>
          <a href="http://www.facebook.com/miruta.ro" rel="noreferrer" target="_blank">
            <img src={facebookImg} alt="facebook sign" />
          </a>
        </S.SidebarIconWrapper>
      </Sticky>
    </S.MainPageWrapper>
  );
}

export default App;
