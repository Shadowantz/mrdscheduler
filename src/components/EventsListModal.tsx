import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Button, Icon, List, Modal, Segment } from 'semantic-ui-react';
import * as R from 'ramda';

import { addEvents, deleteFullDayFlag, setFullDayFlag } from './EventsList.api';
import { HOURS, MESS_SUBJECTS } from '../constants/mainPageConstants';
import * as S from './EventsListModal.style';
import { checkDateIfBlocked } from '../utils/utils';

const labels = {
  free: 'Liber',
  busy: 'Ocupat',
  blocked: 'Indisponibil',
};

const EventsListModal: React.FC = () => {
  const dispatch = useDispatch();
  const showEventsListModal = useSelector((state) => state.mainPage.showEventsListModal);
  const selectedDate = useSelector((state) => state.mainPage.activeSlot.selectedDate);
  const logInState = useSelector((state) => state.mainPage.logInState);
  const fullDaysInStore = useSelector((state) => state.mainPage.fullDaysInStore);
  const events = useSelector((state) => state.mainPage.events);

  const [blockHours, setBlockHours] = useState(false);
  const [busyHours, setBusyHours] = useState(false);

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
  };

  const handleBlockByHours = ({ item, blockType }) => {
    addEvents({
      selectedDate,
      startTime: item,
      email: '',
      name: blockType,
      phone: 1111111111,
      callback: () => {
        if (R.keys(events).length === 7) {
          setFullDayFlag({ selectedDate });
        }
      },
    });
  };

  const getEventText = (item) => {
    if (!events[item]) return labels.free;

    if (events[item] && !logInState && events[item].name === labels.blocked) return labels.blocked;

    if (events[item] && !logInState) return labels.busy;

    return events[item].name;
  };

  const getLabelColor = (text) => {
    if (text === labels.free) return 'green';
    if (text === labels.busy) return 'red';
    if (text === labels.blocked) return 'gray';

    return 'red';
  };

  const buildListItems = (items: number[]) =>
    items.map((item) => {
      const text = getEventText(item);

      return (
        <List key={uuidv4()} selection>
          <Segment size="small" selection>
            <List.Item
              disabled={text !== labels.free && !logInState}
              onClick={() => {
                if (blockHours || busyHours) {
                  handleBlockByHours({ item, blockType: blockHours ? 'Indisponibil' : 'Ocupat' });
                } else {
                  handleSlotSelect(item);
                }
              }}
            >
              <S.SpecialLabel size="large" color={getLabelColor(text)} horizontal>
                <Icon name="clock outline" />
                {`${item} - ${item + 1}`}
              </S.SpecialLabel>
              {text}
            </List.Item>
          </Segment>
        </List>
      );
    });

  const buildBlockDayButton = () => {
    const isBlockedDay = checkDateIfBlocked({ date: selectedDate, fullDaysInStore });

    return (
      <Button
        color="black"
        onClick={() => {
          if (isBlockedDay) {
            deleteFullDayFlag({
              selectedDate,
              callback: () => {
                dispatch({
                  type: 'setNotificationsModal',
                  payload: MESS_SUBJECTS.dayUnBlocked,
                });
              },
            });
          } else {
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
          }

          dispatch({ type: 'resetModalInputsText' });
          dispatch({ type: 'setShowEventsListModal', payload: false });
        }}
      >
        <Icon name={isBlockedDay ? 'lock open' : 'lock'} color={isBlockedDay ? 'yellow' : 'grey'} />
        Zi
      </Button>
    );
  };

  const buildBlockHoursButton = () => (
    <Button
      color="black"
      onClick={() => {
        setBlockHours((prevState) => !prevState);
        setBusyHours(false);
      }}
    >
      <Icon name={blockHours ? 'lock open' : 'lock'} color={blockHours ? 'yellow' : 'grey'} />
      Ore (indisp.)
    </Button>
  );

  const buildBusyHoursButton = () => (
    <Button
      color="black"
      onClick={() => {
        setBusyHours((prevState) => !prevState);
        setBlockHours(false);
      }}
    >
      <Icon name={busyHours ? 'lock open' : 'lock'} color={busyHours ? 'yellow' : 'grey'} />
      Ore (ocupat)
    </Button>
  );

  return (
    <Modal
      onClose={() => {
        dispatch({ type: 'setShowEventsListModal', payload: false });
      }}
      open={showEventsListModal}
      closeIcon
      size="tiny"
    >
      <Modal.Header>{`Alege ora pentru  ${selectedDate?.format('DD/MM/YY')}`}</Modal.Header>
      <Modal.Content>
        <Modal.Description>{buildListItems(HOURS)}</Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        {logInState ? (
          <>
            {buildBlockDayButton()}
            {buildBlockHoursButton()}
            {buildBusyHoursButton()}
          </>
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
