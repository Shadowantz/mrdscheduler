import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import * as R from 'ramda';
import moment from 'moment';
import 'moment/locale/ro';

import { checkDateIfWeekend } from '../utils/utils';
import * as S from '../pages/MainPage.style';
import { FORMATS } from '../constants/mainPageConstants';
import { getEvents } from './MyCalendar.api';

const MyCalendar = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.mainPage.events);

  const localize = momentLocalizer(moment);

  const handleSelect = (props) => {
    const { start, end } = props;

    if (checkDateIfWeekend(start)) return null;
    if (!R.has('resourceId', props)) return null;

    dispatch({ type: 'setActiveSlot', payload: { start, end } });
    dispatch({ type: 'setShowAddEventModal', payload: true });

    return null;
  };

  const MonthViewComponent = (props): JSX.Element => {
    const { onDrillDown, label, date } = props;
    const isWeekend = checkDateIfWeekend(date);

    return (
      <S.DayWrappedForMonth
        isWeekend={isWeekend}
        onClick={(event) => {
          !isWeekend && onDrillDown(event);
        }}
      >
        {label}
      </S.DayWrappedForMonth>
    );
  };

  const CustomDayBackground = (date: Date): object => {
    if (checkDateIfWeekend(date)) {
      return {
        className: 'weekendDay',
      };
    }

    return {};
  };

  const onNavigateCallback = (date) => {
    getEvents({ currentStartOfDay: moment(date).startOf('day').valueOf(), dispatch });
  };

  return (
    <>
      <S.CalendarWrapper>
        <Calendar
          localizer={localize}
          events={events}
          step={30} // steps in minutes for day view
          timeslots={1} // how many time slots will be occupied by one event
          formats={FORMATS}
          defaultDate={new Date()} // start date
          min={new Date(1970, 1, 1, 9)} // min value of hours displayed by day view
          max={new Date(1970, 1, 1, 16, 59, 0)} // max value of hours displayed by day view. It
          // needs to be in minutes till the last hour if the last hour is 17:00
          allDayAccessor={() => false}
          dayPropGetter={(date) => CustomDayBackground(date)}
          views={{ month: true, day: true }} // types of available views
          style={{ height: 400, width: 800 }} // wrapper style
          onSelectSlot={handleSelect}
          onNavigate={onNavigateCallback}
          onSelecting={() => false} // allows multiple slot selections, false == blocks it
          selectable
          onSelectEvent={(event) => alert(event)} // eslint-disable-line
          eventPropGetter={() => ({ style: { backgroundColor: 'red' } })}
          components={{
            month: {
              dateHeader: MonthViewComponent,
            },
            // toolbar: ToolBarComponent,
          }}
          messages={{
            day: 'Zile',
            month: 'Luna',
            previous: 'Inapoi',
            next: 'Inainte',
            today: 'Ziua curenta',
          }}
        />
      </S.CalendarWrapper>
    </>
  );
};

export default MyCalendar;
