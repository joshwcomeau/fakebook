import { StyleSheet } from 'aphrodite';
import {
  offwhite,
  mediumGrey,
  darkGrey,
  primaryColor,
} from '../../style-variables';

export default StyleSheet.create({
  tab: {
    position: 'relative',
    display: 'inline-block',
    height: '41px',
    lineHeight: '41px',
    borderRight: `1px solid ${offwhite}`,

    ':first-of-type': {
      borderLeft: `1px solid ${offwhite}`,
    },
  },

  tabLink: {
    display: 'block',
    padding: '0 17px',
    textDecoration: 'none',
    transform: 'translateY(-2px)',
  },

  selected: {
    cursor: 'default',
  },

  label: {
    color: primaryColor,
    fontSize: '14px',
    fontWeight: 'bold',
  },

  selectedLabel: {
    color: darkGrey,
  },

  selectedNub: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: '-1px',
    margin: 'auto',
  },

  subLabel: {
    fontSize: '11px',
    paddingLeft: '6px',
    color: mediumGrey,
  },
});
