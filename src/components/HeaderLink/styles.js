import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
  headerLink: {
    position: 'relative',
    display: 'inline-block',
    float: 'left',
    margin: '7px 0 8px',
    padding: '0 10px 1px',
    height: '27px',
    lineHeight: '28px',
    fontSize: '12px',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#FFFFFF',
    verticalAlign: 'top',
    whiteSpace: 'nowrap',
    borderRadius: '3px',

    ':hover': {
      backgroundColor: 'rgba(0,0,0,0.1)',
    },
  },
  image: {
    display: 'inline',
    width: '24px',
    height: '24px',
    margin: '2px 6px 2px -8px',
    verticalAlign: 'inherit',
    borderRadius: '2px',
  },
});
