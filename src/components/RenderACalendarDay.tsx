// eslint-disable-next-line no-use-before-define
import React from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
// import { Icon } from 'semantic-ui-react';
import * as S from './RenderACalendarDay.style';
import { getEvents } from './MyCalendar.api';

interface RenderACalendarDayProps {
  date: Date;
  isFullDay: boolean;
  isWeekend: boolean;
  isBlockedDay: boolean;
  logInState: boolean;
}

const RenderACalendarDay: React.FC<RenderACalendarDayProps> = ({
  date,
  isFullDay,
  isWeekend,
  isBlockedDay,
  logInState,
}) => {
  const internalDateStartOfDay = moment(date).startOf('day');
  const internalDate = internalDateStartOfDay.get('date');
  const dispatch = useDispatch();

  return (
    <S.DayWrapper
      isFullDay={isFullDay}
      isWeekend={isWeekend}
      isBlockedDay={isBlockedDay}
      logInState={logInState}
      onClick={() => {
        getEvents({
          internalDateStartOfDay: internalDateStartOfDay.valueOf(),
          dispatch,
          callback: () => {
            dispatch({
              type: 'setActiveSlot',
              payload: { selectedDate: moment(date).startOf('day') },
            });
            dispatch({ type: 'setShowEventsListModal', payload: true });
          },
        });
      }}
    >
      {internalDate}
    </S.DayWrapper>
  );
};
export default RenderACalendarDay;
