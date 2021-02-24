import moment from 'moment';
import emailjs from 'emailjs-com';
import * as R from 'ramda';

import firebaseApp from '../utils/firebaseConection';

export function addEvents(props) {
  const db = firebaseApp.database();
  const { currentStartOfDay, start, email, end, name, phone, title } = props;

  db.ref(`events/${currentStartOfDay}/${moment(start).valueOf()}`)
    .set({
      start: moment(start).valueOf(),
      end: moment(end).valueOf(),
      title,
      name,
      email,
      phone,
    })
    .then(() => {
      emailjs
        .send(
          'service_6e3b25m',
          'template_lh66s1o',
          {
            date: moment(start).format('DD/MM/YYYY'),
            hour: moment(start).format('HH:mm'),
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
  const { currentStartOfDay, dispatch } = props;
  const db = firebaseApp.database().ref(`events/${currentStartOfDay}`);

  db.on('value', (snapshot) => {
    const itm = snapshot.val();

    dispatch({
      type: 'setEvents',
      payload: itm
        ? R.compose(
            R.map((el) => {
              const oldEl = itm[el];
              return {
                ...oldEl,
                start: moment(oldEl.start).toDate(),
                end: moment(oldEl.end).toDate(),
              };
            }),
            R.keys,
          )(itm)
        : [],
    });
  });
}

export function deleteEvents(props) {
  const db = firebaseApp.database();
  const { currentStartOfDay, start } = props;

  db.ref(`events/${currentStartOfDay}/${moment(start).valueOf()}`).remove();
}
