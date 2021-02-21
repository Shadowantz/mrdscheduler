import { Formats } from 'react-big-calendar';

export const FORMATS: Formats = {
  dateFormat: 'DD',
  dayFormat: 'dd',
  dayHeaderFormat: 'LL',
  timeGutterFormat: 'HH:mm',
};

export const DEFAULT_EVENT = {
  name: '',
  title: '',
  email: '',
  phone: '',
};

export const MESS_SUBJECTS = {
  loginSuccess: {
    open: true,
    header: 'Logged In status',
    content: 'You are now logged in',
  },
  notAuthorized: {
    open: true,
    header: 'Logged In status',
    content: 'You are not authorized to use this app',
  },
  loggOutSuccess: {
    open: true,
    header: 'Logged Out status',
    content: 'You are now logged out',
  },
};

export const NOTIFICATIONS_MODAL = {
  open: false,
  header: '',
  content: '',
};
