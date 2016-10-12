import { StyleSheet } from 'aphrodite';
import { navy } from '../../style-variables';

export default StyleSheet.create({
  flyout: {
    display: 'block',
    position: 'absolute',
    top: '46px',
    right: 0,
    width: '430px',
    height: '400px', // temp
    zIndex: -1,
    background: '#FFFFFF',
    boxShadow: '0px 1px 3px rgba(0,0,0,0.25)',
    color: navy
  },

  nub: {
    position: 'absolute',
    top: -11,
    width: 0,
    height: 0,
    borderLeft: '11px solid transparent',
    borderRight: '11px solid transparent',
    borderBottom: '11px solid #FFF',
  },
});
