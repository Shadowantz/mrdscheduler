import moment from 'moment';
import * as R from 'ramda';

import firebaseApp from '../utils/firebaseConection';

export function addEvents(props) {
  const db = firebaseApp.database();
  const { currentStartOfDay, start, email, end, name, phone, title } = props;

  db.ref(`events/${currentStartOfDay}/${moment(start).valueOf()}`).set({
    start: moment(start).valueOf(),
    end: moment(end).valueOf(),
    title,
    name,
    email,
    phone,
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
