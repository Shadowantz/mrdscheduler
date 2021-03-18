import { Formats } from 'react-big-calendar';

// TODO: DELETE THIS
export const FORMATS: Formats = {
  dateFormat: 'DD',
  dayFormat: 'dd',
  dayHeaderFormat: 'LL',
  timeGutterFormat: 'HH:mm',
};

export const DEFAULT_EVENT = {
  name: '',
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
  logOutSuccess: {
    open: true,
    header: 'Logged Out status',
    content: 'You are now logged out',
  },
  eventCreatedSuccessfully: {
    open: true,
    header: 'Programare creata cu succes',
    content: 'Programarea a fost inregistrata cu succes',
  },
  eventDeletedSuccessfully: {
    open: true,
    header: 'Event Deleted',
    content: 'Event deleted successfully',
  },
  dayBlocked: {
    open: true,
    header: 'Day Blocked',
    content: 'Day Blocked successfully',
  },
  dayUnBlocked: {
    open: true,
    header: 'Day Unblocked',
    content: 'Day Unblocked successfully',
  },
};

export const NOTIFICATIONS_MODAL = {
  open: false,
  header: '',
  content: '',
};
