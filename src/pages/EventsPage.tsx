// eslint-disable-next-line no-use-before-define
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DayPicker from 'react-day-picker';
import MomentLocaleUtils from 'react-day-picker/moment';
import { Grid } from 'semantic-ui-react';

import 'react-day-picker/lib/style.css';
import 'moment/locale/ro';

import * as S from './EventsPage.style';
import NewEventModal from '../components/NewEventModal';
import EventsListModal from '../components/EventsListModal';
import RenderACalendarDay from '../components/RenderACalendarDay';
import { getFullDayFlag } from '../components/EventsList.api';
import { checkDateIfBlocked, checkDateIfFull, checkDateIfWeekend } from '../utils/utils';

const EventsPage: React.FC = () => {
  const dispatch = useDispatch();

  const events = useSelector((state) => state.mainPage.events);
  const isMobile = useSelector((state) => state.mainPage.isMobile);
  const fullDaysInStore = useSelector((state) => state.mainPage.fullDaysInStore);
  const logInState = useSelector((state) => state.mainPage.logInState);

  useEffect(() => {
    getFullDayFlag({ dispatch });
  }, [events]); // eslint-disable-line

  return (
    <S.EventsPageWrapper isMobile={isMobile}>
      <Grid style={{ margin: 0, padding: 0, height: '100vh' }}>
        {isMobile ? null : (
          <Grid.Row>
            <Grid.Column isMobile={isMobile} textAlign="left" computer={16} mobile={16}>
              <S.TitleTextContainer>
                <S.TitleText>
                  Am construit rețele electronice prin care circulă informația în întreaga lume
                </S.TitleText>
                <S.TitleText>și acum construiesc o rețea de încredere între gorjeni.</S.TitleText>
                <S.BlueLine />
              </S.TitleTextContainer>
            </Grid.Column>
          </Grid.Row>
        )}
        <Grid.Row>
          <Grid.Column style={{ marginTop: isMobile ? 0 : '-4rem' }} computer={8} mobile={16}>
            <S.TextContainer>
              <S.AddressTextBold isMobile={isMobile}>Programări Audiențe</S.AddressTextBold>
              <S.AddressTextRegular isMobile={isMobile}>Cabinet parlamentar</S.AddressTextRegular>
              <S.AddressTextRegular isMobile={isMobile}>Târgu Jiu,</S.AddressTextRegular>
              <S.AddressTextRegular isMobile={isMobile}>
                Str. Victoriei Nr. 2-4
              </S.AddressTextRegular>
              <S.AddressTextRegular isMobile={isMobile}>
                (la parterul Prefecturii Gorj)
              </S.AddressTextRegular>
            </S.TextContainer>
          </Grid.Column>
          <Grid.Column
            style={{ marginTop: '-4rem' }}
            computer={8}
            mobile={16}
            verticalAlign="top"
            textAlign="left"
          >
            <S.CalendarContainer isMobile={isMobile}>
              <DayPicker
                localeUtils={MomentLocaleUtils}
                locale="ro"
                renderDay={(date) => {
                  const isFullDay = checkDateIfFull({ date, fullDaysInStore });
                  const isBlockedDay = checkDateIfBlocked({ date, fullDaysInStore });
                  const isWeekend = checkDateIfWeekend(date);

                  return (
                    <RenderACalendarDay
                      isFullDay={isFullDay}
                      isWeekend={isWeekend}
                      isBlockedDay={isBlockedDay}
                      logInState={logInState}
                      date={date}
                    />
                  );
                }}
              />
            </S.CalendarContainer>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <EventsListModal />
      <NewEventModal />
    </S.EventsPageWrapper>
  );
};

export default EventsPage;
