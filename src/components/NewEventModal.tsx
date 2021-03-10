import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input, Modal } from 'semantic-ui-react';
import moment from 'moment';

import { addEvents, deleteEvents, setFullDayFlag, deleteFullDayFlag } from './MyCalendar.api';
import { MESS_SUBJECTS } from '../constants/mainPageConstants';

function NewEventModal() {
  const dispatch = useDispatch();
  const showAddEventModal = useSelector((state) => state.mainPage.showAddEventModal);
  const activeSlot = useSelector((state) => state.mainPage.activeSlot);
  const logInState = useSelector((state) => state.mainPage.logInState);
  const modalInputsText = useSelector((state) => state.mainPage.modalInputsText);
  const events = useSelector((state) => state.mainPage.events);

  const currentStartOfDay = moment(activeSlot.start).startOf('day').valueOf();

  return (
    <Modal
      onClose={() => {
        dispatch({ type: 'resetModalInputsText' });
        dispatch({ type: 'setShowAddEventModal', payload: false });
      }}
      open={showAddEventModal}
      closeIcon
      size="tiny"
    >
      <Modal.Header>Adauga o programare</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <p>
            <Input
              fluid
              name="name"
              size="large"
              label="Nume si Prenume"
              placeholder="Vasiliu Ioan"
              value={modalInputsText.name}
              onChange={(
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                e,
                { value },
              ) => dispatch({ type: 'setModalInputsText', payload: { name: value, title: value } })}
            />
          </p>
          <p>
            <Input
              fluid
              size="large"
              type="number"
              label="Numar de Telefon"
              placeholder="0700111222"
              value={modalInputsText.phone}
              onChange={(
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                e,
                { value },
              ) => dispatch({ type: 'setModalInputsText', payload: { phone: value } })}
            />
          </p>
          <p>
            <Input
              fluid
              size="large"
              type="email"
              label="Email"
              value={modalInputsText.email}
              placeholder="vasiliu.ioan@gmail.com"
              onChange={(
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                e,
                { value },
              ) => dispatch({ type: 'setModalInputsText', payload: { email: value } })}
            />
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        {logInState ? (
          <>
            <Button
              color="black"
              onClick={() => {
                setFullDayFlag({
                  currentStartOfDay,
                  block: 'block',
                  callback: () => {
                    dispatch({
                      type: 'setNotificationsModal',
                      payload: MESS_SUBJECTS.dayBlocked,
                    });
                  },
                });

                dispatch({ type: 'resetModalInputsText' });
                dispatch({ type: 'setShowAddEventModal', payload: false });
              }}
            >
              Blocheaza
            </Button>
            <Button
              color="red"
              onClick={() => {
                deleteEvents({
                  currentStartOfDay,
                  ...activeSlot,
                  ...modalInputsText,
                  callback: () => {
                    if (events.length === 8) {
                      deleteFullDayFlag({ currentStartOfDay });
                    }

                    dispatch({
                      type: 'setNotificationsModal',
                      payload: MESS_SUBJECTS.eventDeletedSuccessfully,
                    });
                  },
                });

                dispatch({ type: 'resetModalInputsText' });
                dispatch({ type: 'setShowAddEventModal', payload: false });
              }}
            >
              Sterge
            </Button>
          </>
        ) : null}
        <Button
          color="black"
          onClick={() => {
            dispatch({ type: 'resetModalInputsText' });
            dispatch({ type: 'setShowAddEventModal', payload: false });
          }}
        >
          Anuleaza
        </Button>
        <Button
          onClick={() => {
            addEvents({
              currentStartOfDay,
              ...activeSlot,
              ...modalInputsText,
              callback: () => {
                if (events.length >= 7) {
                  setFullDayFlag({ currentStartOfDay });
                }

                dispatch({
                  type: 'setNotificationsModal',
                  payload: MESS_SUBJECTS.eventCreatedSuccessfully,
                });
              },
            });

            dispatch({ type: 'setShowAddEventModal', payload: false });
            dispatch({ type: 'resetModalInputsText' });
          }}
          positive
          disabled={!(modalInputsText.name && modalInputsText.phone)}
        >
          Creaza
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default NewEventModal;
