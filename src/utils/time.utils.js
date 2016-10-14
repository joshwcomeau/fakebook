// Some simple date/time utilities.
// Yes, I could just use moment.js, but moment.js is several hundred kb
// of unneeded code. I just need simple display stuff.
import padStart from 'lodash.padstart';
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const getMonth = date => months[date.getMonth()];
export const getDate = date => date.getDate();
export const getHour24 = date => date.getHours();
export const getHour = date => {
  const hour24 = getHour24(date);
  return hour24 > 12 ? hour24 - 12 : hour24;
};
export const getMinute = date => padStart(date.getMinutes(), 2, '0');
export const getAMPM = date => getHour24(date) < 12 ? 'AM' : 'PM';

export const getTime = date => `${getHour(date)}:${getMinute(date)} ${getAMPM(date)}`;

export const formatPostTimestamp = (date) => {
  return `${getMonth(date)} ${getDate(date)} at ${getTime(date)}`;
}
