import moment from 'moment';

export const checkDateIfWeekend = (date: Date): boolean => {
  const day = moment(date).get('isoWeekday');

  return day === 6 || day === 7;
};
