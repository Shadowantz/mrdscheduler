import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, useHistory, Redirect } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import * as S from './MainPage.style';

import AboutMePage from './AboutMePage';
import ContactPage from './ContactPage';
import NewEventModal from './NewEventModal';
import MyCalendar from '../components/MyCalendar';
import NotificationsModal from '../components/NotificationsModal';
import { authStateChangeEvent, logInAction, logOutAction } from '../utils/utils';

function App() {
  const dispatch = useDispatch();
  const logInState = useSelector((state) => state.mainPage.logInState);

  const [activeItem, setActiveItem] = useState('home');
  const history = useHistory();

  useEffect(authStateChangeEvent(dispatch), []); // eslint-disable-line

  return (
    <S.MainPageWrapper>
      <S.MainPageContainer>
        <Menu attached="top" tabular size="huge" inverted className="menuItemsComponentWrap">
          <Menu.Item
            name="programari"
            className="qqqq"
            active={activeItem === 'home'}
            onClick={() => {
              setActiveItem('home');
              history.push('/home');
            }}
          />

          <Menu.Item
            name="about"
            active={activeItem === 'about'}
            onClick={() => {
              setActiveItem('about');
              history.push('/about');
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

          <Menu.Item
            name="CV"
            active={activeItem === 'cv'}
            onClick={() => {
              window.open('http://www.cdep.ro/camera_deputatilor/deputati/cv/7271.pdf', '_blank');
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
        </Menu>

        <S.StyledSegment attached="bottom">
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home">
            <MyCalendar />
            <NewEventModal />
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
    </S.MainPageWrapper>
  );
}

export default App;
