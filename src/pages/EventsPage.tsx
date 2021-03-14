// eslint-disable-next-line no-use-before-define
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DayPicker from 'react-day-picker';
import MomentLocaleUtils from 'react-day-picker/moment';
import { Icon, Label } from 'semantic-ui-react';

import 'react-day-picker/lib/style.css';
import 'moment/locale/ro';

import * as S from './EventsPage.style';
import NewEventModal from '../components/NewEventModal';

const EventsPage: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const isMobile = useSelector((state) => state.mainPage.isMobile);
  const labelSize = isMobile ? 'small' : 'big';

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
        <DayPicker localeUtils={MomentLocaleUtils} locale="ro" />
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
      <NewEventModal />
    </S.EventsPageWrapper>
  );
};

export default EventsPage;
