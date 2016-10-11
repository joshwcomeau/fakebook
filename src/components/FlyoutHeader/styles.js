import { StyleSheet } from 'aphrodite';
import {
  offwhite,
  lightGrey,
  darkGrey,
  primaryColor,
} from '../../global-styles';

export default StyleSheet.create({
  flyoutHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5px 8px',
    borderBottom: `1px solid ${lightGrey}`,
    fontSize: '12px',
  },

  heading: {
    fontWeight: 'bold',
    color: darkGrey,
    lineHeight: '20px',
  },

  action: {
    border: 'none',
    background: 'transparent',
    outline: 'none',
    color: primaryColor,
    cursor: 'pointer',

    ':hover': {
      textDecoration: 'underline',
    },
  },
});
