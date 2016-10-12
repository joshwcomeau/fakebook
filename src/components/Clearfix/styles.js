import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
  clearfix: {
    ':after': {
      content: '',
      display: 'table',
      clear: 'both',
    },
  },
});
