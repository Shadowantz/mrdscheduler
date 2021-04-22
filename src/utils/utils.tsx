import moment from 'moment';
import * as R from 'ramda';
import firebaseApp from './firebaseConection';
import { MESS_SUBJECTS } from '../constants/mainPageConstants';

export const checkDateIfWeekend = (date: Date): boolean => {
  const day = moment(date).get('isoWeekday');

  return day === 6 || day === 7;
};

export const initialOrientation = window.screen.orientation.type;

export const isMobile = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

export const checkDateIfFull = ({ date, fullDaysInStore }) => {
  const currentDayTimestamp = moment(date).startOf('day').valueOf();

  return R.has(currentDayTimestamp)(fullDaysInStore);
};

export const checkDateIfBlocked = ({ date, fullDaysInStore }) => {
  const currentDayTimestamp = moment(date).startOf('day').valueOf();
  const isDayBlocked = fullDaysInStore[currentDayTimestamp]?.fullDay === 'block';

  return checkDateIfFull({ date, fullDaysInStore }) && isDayBlocked;
};

export const authStateChangeEvent = (dispatch) =>
  firebaseApp.auth().onAuthStateChanged((user) => {
    dispatch({ type: 'setLogInState', payload: !!user });
  });

export const logInAction = (dispatch) => {
  const auth = firebaseApp.auth();
  const provider = new firebaseApp.auth.GoogleAuthProvider();

  auth
    .signInWithPopup(provider)
    .then((result) => {
      checkUser(result?.user?.uid, dispatch);
    })
    .catch((error) => {
      console.error('An error occurred trying to log in', error); // eslint-disable-line
    });
};
export const logOutAction = (dispatch, notAuthorized) =>
  firebaseApp
    .auth()
    .signOut()
    .then(() =>
      dispatch({
        type: 'setNotificationsModal',
        payload: notAuthorized ? MESS_SUBJECTS.notAuthorized : MESS_SUBJECTS.logOutSuccess,
      }),
    )
    .catch((error) => {
      console.error('An error occurred trying to log out', error); // eslint-disable-line
    });

const checkUser = (userId, dispatch) => {
  const db = firebaseApp.database().ref();

  db.child('users')
    .child(userId)
    .get()
    .then((snapshot) => {
      if (!snapshot.exists()) {
        return logOutAction(dispatch, 'notAuthorized');
      }

      return dispatch({ type: 'setNotificationsModal', payload: MESS_SUBJECTS.loginSuccess });
    })
    .catch((error) => {
      console.error('An error occurred trying authorize', error); // eslint-disable-line
    });
};
