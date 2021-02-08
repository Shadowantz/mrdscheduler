import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input, Modal } from 'semantic-ui-react';

const defaultEvent = {
  name: '',
  title: '',
  email: '',
  phone: '',
};

function NewEventModal() {
  const dispatch = useDispatch();
  const showAddEventModal = useSelector((state) => state.mainPage.showAddEventModal);
  const activeSlot = useSelector((state) => state.mainPage.activeSlot);
  const [inputVal, setInputVal] = useState(defaultEvent);

  // return dispatch({
  //   type: 'setEvents',
  //   payload: {
  //     start,
  //     end,
  //     title: 'qweqweq',
  //   },
  // });

  return (
    <Modal
      onClose={() => dispatch({ type: 'setShowAddEventModal', payload: false })}
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
              onChange={(
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                e,
                { value },
              ) =>
                setInputVal({
                  ...inputVal,
                  name: value,
                  title: value,
                })
              }
            />
          </p>
          <p>
            <Input
              fluid
              size="large"
              type="number"
              label="Numar de Telefon"
              placeholder="0700111222"
              onChange={(
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                e,
                { value },
              ) =>
                setInputVal({
                  ...inputVal,
                  phone: value,
                })
              }
            />
          </p>
          <p>
            <Input
              fluid
              size="large"
              type="email"
              label="Email"
              placeholder="vasiliu.ioan@gmail.com"
              onChange={(
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                e,
                { value },
              ) =>
                setInputVal({
                  ...inputVal,
                  email: value,
                })
              }
            />
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          color="black"
          onClick={() => dispatch({ type: 'setShowAddEventModal', payload: false })}
        >
          Anuleaza
        </Button>
        <Button
          onClick={() => {
            dispatch({
              type: 'setEvents',
              payload: {
                ...activeSlot,
                ...inputVal,
              },
            });

            dispatch({ type: 'setShowAddEventModal', payload: false });
          }}
          positive
        >
          Creaza
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default NewEventModal;
