import { StyleSheet } from 'aphrodite';

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
});
