import { StyleSheet } from 'aphrodite';
import { alertColor } from '../../global-styles';

export default StyleSheet.create({
  iconContainer: {
    position: 'relative',
    display: 'block',
    float: 'left',
    margin: '5px 0 6px',
    padding: '4px 3px 0',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    background: 'transparent',

    ':hover span': {
      opacity: '0.8',
    },
  },
  icon: {
    opacity: '0.6',
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
