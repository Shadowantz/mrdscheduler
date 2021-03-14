import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Button, Icon, Label, List, Modal } from 'semantic-ui-react';
import { setFullDayFlag } from './MyCalendar.api';
import { MESS_SUBJECTS } from '../constants/mainPageConstants';
// import * as R from 'ramda';

// import moment from 'moment';

const hours = [9, 10, 11, 12, 13, 14, 15, 16];

const EventsListModal: React.FC = () => {
  const dispatch = useDispatch();
  const showEventsListModal = useSelector((state) => state.mainPage.showEventsListModal);
  const selectedDate = useSelector((state) => state.mainPage.activeSlot.selectedDate);
  const logInState = useSelector((state) => state.mainPage.logInState);
  const events = useSelector((state) => state.mainPage.events);

  const handleSlotSelect = (startTime) => {
    dispatch({ type: 'setActiveSlot', payload: { startTime } });

    if (logInState && events[startTime]) {
      const { name, email, phone } = events[startTime];

      dispatch({
        type: 'setModalInputsText',
        payload: { name, email, phone },
      });
    }

    dispatch({ type: 'setShowEventsListModal', payload: false });
    dispatch({ type: 'setShowAddEventModal', payload: true });

    // if (slots.length >= 6) {
    //   dispatch({ type: 'setIsLastSlotFromDay', payload: true });
    // }
  };

  const getEventText = (item) => {
    if (!events[item]) return 'Liber';

    if (events[item] && !logInState) return 'Ocupat';

    return events[item].name;
  };

  const buildListItems = (items: number[]) =>
    items.map((item) => (
      <List key={uuidv4()} divided selection>
        <List.Item
          onClick={() => {
            handleSlotSelect(item);
          }}
        >
          <Label size="medium" color="green" horizontal>
            <Icon name="clock outline" />
            {`${item} - ${item + 1}`}
          </Label>
          {getEventText(item)}
        </List.Item>
      </List>
    ));

  return (
    <Modal
      onClose={() => {
        dispatch({ type: 'setShowEventsListModal', payload: false });
      }}
      open={showEventsListModal}
      closeIcon
      size="large"
    >
      <Modal.Header>{`Alege ora pentru  ${selectedDate?.format('DD/MM/YY')}`}</Modal.Header>
      <Modal.Content>
        <Modal.Description>{buildListItems(hours)}</Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        {logInState ? (
          <Button
            color="black"
            onClick={() => {
              setFullDayFlag({
                selectedDate,
                block: 'block',
                callback: () => {
                  dispatch({
                    type: 'setNotificationsModal',
                    payload: MESS_SUBJECTS.dayBlocked,
                  });
                },
              });

              dispatch({ type: 'resetModalInputsText' });
              dispatch({ type: 'setShowEventsListModal', payload: false });
            }}
          >
            Blochează
          </Button>
        ) : null}
        <Button
          color="black"
          onClick={() => {
            dispatch({ type: 'setShowEventsListModal', payload: false });
          }}
        >
          Închide
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default EventsListModal;
