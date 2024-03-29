import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { Icon, Label } from 'semantic-ui-react';
import * as R from 'ramda';
import moment from 'moment';

import 'moment/locale/ro';

import { checkDateIfWeekend, checkDateIfBlocked } from '../utils/utils';
import * as S from '../pages/MainPage.style';
import { FORMATS } from '../constants/mainPageConstants';
import { getEvents, getFullDayFlag } from './MyCalendar.api';

const MyCalendar = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.mainPage.events);
  const logInState = useSelector((state) => state.mainPage.logInState);
  const fullDaysInStore = useSelector((state) => state.mainPage.fullDaysInStore);
  const isMobile = useSelector((state) => state.mainPage.isMobile);

  const localize = momentLocalizer(moment);

  useEffect(() => {
    getFullDayFlag({ dispatch });

    // addEventListener('touchstart', () => console.log('ON TOUCH START'));
  }, [events]); // eslint-disable-line

  const handleSlotSelect = (props) => {
    const { start, end, slots } = props;

    if (checkDateIfWeekend(start)) return null;
    if (checkDateIfBlocked({ date: start, fullDaysInStore })) return null;
    if (!R.has('resourceId', props)) return null;

    dispatch({ type: 'setActiveSlot', payload: { start, end } });
    dispatch({ type: 'setShowAddEventModal', payload: true });

    if (slots.length >= 6) {
      dispatch({ type: 'setIsLastSlotFromDay', payload: true });
    }

    return null;
  };

  const handleEventSelect = (props) => {
    const { start, end } = props;

    if (logInState) {
      dispatch({ type: 'setActiveSlot', payload: { start, end } });
      dispatch({ type: 'setModalInputsText', payload: props });
      dispatch({ type: 'setShowAddEventModal', payload: true });
    }
    return null;
  };

  const MonthViewComponent = (props): JSX.Element => {
    const { onDrillDown, label, date } = props;
    const isBlockedDay = checkDateIfBlocked({ date, fullDaysInStore });
    const isWeekend = checkDateIfWeekend(date);

    return (
      <S.DayWrappedForMonth
        isWeekend={isWeekend || isBlockedDay}
        onClick={(event) => {
          if (isBlockedDay || isWeekend) {
            return null;
          }
          return onDrillDown(event);
        }}
      >
        {label}
      </S.DayWrappedForMonth>
    );
  };

  const DayViewComponent = (props): JSX.Element => {
    const { title } = props;

    if (!logInState) return <S.DayView> Ocupat </S.DayView>;
    return <S.DayView>{title}</S.DayView>;
  };

  const CustomDayBackground = (date: Date): object => {
    const currentDayTimestamp = moment(date).startOf('day').valueOf();
    const isWeekend = checkDateIfWeekend(date);

    if (isWeekend) {
      return {
        className: 'blockedDay',
      };
    }

    if (R.has(currentDayTimestamp)(fullDaysInStore)) {
      if (fullDaysInStore[currentDayTimestamp].fullDay === 'block') {
        return {
          className: 'blockedDay',
        };
      }

      return {
        className: 'dayFull',
      };
    }

    return {
      className: 'openDay',
    };
  };

  const onNavigateCallback = (date) => {
    getEvents({ currentStartOfDay: moment(date).startOf('day').valueOf(), dispatch });
  };

  const onSelectingCallback = ({ start, end }) => {
    // used to select a timeslot on mobile
    const initialEnd = moment(start).add(1, 'hour');
    const currentEnd = moment(end);

    if (!isMobile) return false; // don't use selection if not on mobile device

    return !currentEnd.isAfter(initialEnd);
  };

  return (
    <>
      <S.CalendarWrapper>
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
        <Calendar
          localizer={localize}
          events={events}
          longPressThreshold={10}
          step={60} // steps in minutes for day view
          timeslots={1} // how many time slots will be occupied by one event
          formats={FORMATS}
          defaultDate={new Date()} // start date
          min={new Date(1970, 1, 1, 9)} // min value of hours displayed by day view
          max={new Date(1970, 1, 1, 16, 59, 0)} // max value of hours displayed by day view. It
          // needs to be in minutes till the last hour if the last hour is 17:00
          allDayAccessor={() => false}
          dayPropGetter={(date) => CustomDayBackground(date)}
          views={{ month: true, day: true }} // types of available views
          style={{ height: 590, width: '98%' }} // wrapper style
          onSelectSlot={handleSlotSelect}
          onSelectEvent={handleEventSelect} // eslint-disable-line
          onNavigate={onNavigateCallback}
          onSelecting={onSelectingCallback} // allows multiple slot selections, false == blocks it
          selectable="ignoreEvents"
          eventPropGetter={() => ({ style: { backgroundColor: 'red' } })}
          components={{
            month: {
              dateHeader: MonthViewComponent,
            },
            day: {
              event: DayViewComponent,
            },
            // eventWrapper: (props) => {
            //   console.log('eventWrapper', props);
            //   return <div>eventWrapper</div>;
            // },
            // eventContainerWrapper: (props) => {
            //   console.log('console', props);
            //   return <TouchCellWrapper {...props} onSelectSlot={handleSlotSelect} />;
            // },
            // timeSlotWrapper: (props) => (
            //   // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            //   // return <div onClick={() => console.log('CLICK ON TIME SLOT')}>timeSlotWrapper</div>;
            //   // return (
            //   //   <TouchCellWrapper
            //   //     onClick={handleSlotSelect}
            //   //     {...props}
            //   //     onSelectSlot={handleSlotSelect}
            //   //   />
            //   // );
            //
            //   <SomeComponent {...props} />
            // ),
            // timeGutterHeader: (props) => {
            //   console.log('timeGutterHeader', props);
            //   return <div>timeGutterHeader</div>;
            // },
            // timeGutterWrapper: (props) => {
            //   console.log('timeGutterWrapper', props);
            //   return <div>timeGutterWrapper</div>;
            // },
            // toolbar: ToolBarComponent,
          }}
          messages={{
            day: 'Zile',
            month: 'Lună',
            previous: 'Înapoi',
            next: 'Înainte',
            today: 'Ziua curentă',
          }}
        />
        <S.Legend>
          <Label size="big" color="green">
            Zi liberă
          </Label>
          <Label size="big" color="red">
            Zi ocupată complet
          </Label>
          <Label size="big" color="grey">
            Zi indisponibilă
          </Label>
        </S.Legend>
      </S.CalendarWrapper>
    </>
  );
};

export default MyCalendar;
