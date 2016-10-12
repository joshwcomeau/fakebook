import { StyleSheet } from 'aphrodite';
import { offwhite, primaryColor } from '../../style-variables';

export default StyleSheet.create({
  button: {
    display: 'inline-block',
    borderRadius: '2px',
    lineHeight: '26px',
    fontSize: '12px',
    padding: '0 8px',
    border: '1px solid',
    cursor: 'pointer',
    WebkitFontSmoothing: 'antialiased',
    boxShadow: '0px 1px 1px rgba(0,0,0,0.2)',
  },
  light: {
    background: '#FFF',
    color: primaryColor,
    borderColor: 'rgba(0, 0, 0, .2)',
    fontWeight: 'bold',

    ':hover': {
      background: offwhite,
    }
  }
});
