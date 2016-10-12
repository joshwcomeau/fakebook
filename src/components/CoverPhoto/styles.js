import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
  coverPhoto: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    borderLeft: '1px solid rgba(0,0,0,0.4)',
    borderRight: '1px solid rgba(0,0,0,0.4)',
  },

  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '150px',
    background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.4) 100%)',
  },
});
