// eslint-disable-next-line no-use-before-define
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DayPicker from 'react-day-picker';
import MomentLocaleUtils from 'react-day-picker/moment';
import { Icon, Label } from 'semantic-ui-react';

import 'react-day-picker/lib/style.css';
import 'moment/locale/ro';

import * as S from './EventsPage.style';
import NewEventModal from '../components/NewEventModal';
import EventsListModal from '../components/EventsListModal';
import { getFullDayFlag } from '../components/MyCalendar.api';
import RenderACalendarDay from '../components/RenderACalendarDay';
import { checkDateIfBlocked, checkDateIfFull, checkDateIfWeekend } from '../utils/utils';

const EventsPage: React.FC = () => {
  const dispatch = useDispatch();

  const events = useSelector((state) => state.mainPage.events);
  const isMobile = useSelector((state) => state.mainPage.isMobile);
  const fullDaysInStore = useSelector((state) => state.mainPage.fullDaysInStore);

  const labelSize = isMobile ? 'small' : 'big';

  useEffect(() => {
    getFullDayFlag({ dispatch });
  }, [events]); // eslint-disable-line

  return (
    <S.EventsPageWrapper>
      <S.CalendarTitle isMobile={isMobile}>
        <Icon name="address book" />
        {' Programări cabinet parlamentar Târgu Jiu'}
      </S.CalendarTitle>
      <S.CalendarAddress isMobile={isMobile}>
        <Icon name="map" />
        <span> </span>
        <a href="https://goo.gl/maps/MgFmehmaXXiWDaRE8" rel="noreferrer" target="_blank">
          Str. Victoriei Nr. 2-4
        </a>
        {' (la parterul Prefecturii Gorj)'}
      </S.CalendarAddress>
      <S.CalendarContainer>
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
                date={date}
              />
            );
          }}
        />
      </S.CalendarContainer>
      <S.Legend>
        <Label size={labelSize} color="green">
          Zi liberă
        </Label>
        <Label size={labelSize} color="red">
          Zi ocupată complet
        </Label>
        <Label size={labelSize} color="grey">
          Zi indisponibilă
        </Label>
      </S.Legend>
      <EventsListModal />
      <NewEventModal />
    </S.EventsPageWrapper>
  );
};

export default EventsPage;
