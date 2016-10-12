import { StyleSheet } from 'aphrodite';
import { alertColor } from '../../style-variables';

export default StyleSheet.create({
  headerAction: {
    display: 'block',
    float: 'left',
    margin: '5px 2px 6px',
  },

  iconContainer: {
    position: 'relative',
    display: 'block',
    padding: '4px 3px 0',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    background: 'transparent',
  },

  iconInactive: {
    opacity: 0.6,
    ':hover': {
      opacity: 0.8,
    },
  },
  iconActive: {
    opacity: 1,
  },

  badge: {
    position: 'absolute',
    zIndex: 2,
    top: 0,
    right: 0,
    padding: '1px 3px',
    fontSize: '9px',
    background: alertColor,
    color: '#FFF',
    borderRadius: '2px',
    WebkitFontSmoothing: 'subpixel-antialiased',
    lineHeight: 1.3,
    minHeight: '13px'
  },
});
