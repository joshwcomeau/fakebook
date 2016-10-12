import { StyleSheet } from 'aphrodite';
import {
  lightGrey,
  mediumGrey,
  darkGrey,
  primaryColor,
} from '../../style-variables';

export default StyleSheet.create({
  flyoutHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5px 8px',
    borderBottom: `1px solid ${lightGrey}`,
    fontSize: '12px',
    lineHeight: '20px',
  },

  heading: {
    fontWeight: 'bold',
    color: darkGrey,
  },

  action: {
    border: 'none',
    background: 'transparent',
    outline: 'none',
    color: primaryColor,
    padding: 0,
    cursor: 'pointer',
    textDecoration: 'none',

    ':hover': {
      textDecoration: 'underline',
    },
  },

  actionContainer: {
    display: 'inline-block',

    ':after': {
      color: mediumGrey,
      padding: '0 4px',
      content: '"·"',
    },

    ':last-child:after': {
      content: 'none',
    },
  },
});
