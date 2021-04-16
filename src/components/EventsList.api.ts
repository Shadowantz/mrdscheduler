import moment from 'moment';
import emailjs from 'emailjs-com';
import { v4 as uuidv4 } from 'uuid';

import firebaseApp from '../utils/firebaseConection';

export function addEvents(props) {
  const db = firebaseApp.database();
  const { selectedDate, startTime, email, name, phone, callback } = props;

  db.ref(`events/${selectedDate.valueOf()}/${startTime}`)
    .set({
      startTime,
      name,
      email,
      phone,
    })
    .then(() => {
      callback();
      emailjs
        .send(
          'service_6e3b25m',
          'template_lh66s1o',
          {
            date: moment(selectedDate).format('DD/MM/YYYY'),
            hour: startTime,
            email,
          },
          'user_dHGunmyBnFMLLOgeGMkE8',
        )
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text); // eslint-disable-line
          },
          (error) => {
            console.log('FAILED...', error); // eslint-disable-line
          },
        );
    });
}

export function getEvents(props) {
  const { internalDateStartOfDay, dispatch, callback } = props;
  const db = firebaseApp.database().ref(`events/${internalDateStartOfDay}`);

  db.on('value', (snapshot) => {
    const itm = snapshot.val() || [];

    dispatch({ type: 'setEvents', payload: itm });

    callback();
  });
}

export function deleteEvents({ selectedDate, startTime, callback }) {
  const db = firebaseApp.database();

  db.ref(`events/${selectedDate.valueOf()}/${startTime}`)
    .remove()
    .then(() => callback());
}

export function setFullDayFlag(props) {
  const db = firebaseApp.database();
  const { selectedDate, block, callback } = props;

  db.ref(`fullDays/${selectedDate.valueOf()}`)
    .set({
      fullDay: block || true,
    })
    .then(() => callback && callback());
}

export function getFullDayFlag(props) {
  const { dispatch } = props;
  const db = firebaseApp.database().ref('fullDays');

  db.on('value', (snapshot) => {
    const itm = snapshot.val();

    dispatch({
      type: 'setFullDaysInStore',
      payload: itm || [],
    });
  });
}

export function deleteFullDayFlag({ selectedDate, callback }) {
  const db = firebaseApp.database();

  db.ref(`fullDays/${selectedDate.valueOf()}`)
    .remove()
    .then(() => callback && callback());
}

export function addContactEmails(props) {
  const db = firebaseApp.database();
  const { item, callback } = props;

  db.ref(`contactEmails/${uuidv4()}/`)
    .set(item)
    .then(() => callback());
}
