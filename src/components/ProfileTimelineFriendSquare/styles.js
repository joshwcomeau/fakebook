import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
  profileTimelineFriendSquare: {
    position: 'relative',
    display: 'block',
    float: 'left',
    width: 'calc(33.33333% - 5px)',
    paddingTop: 'calc(33.33333% - 5px)',
    marginRight: '5px',
    marginBottom: '5px',
    backgroundSize: 'cover',
  },

  friendName: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    color: '#FFF',
    fontSize: '12px',
    fontWeight: 500,
    lineHeight: '16px',
    padding: '5px',
    background: 'linear-gradient(transparent, rgba(0, 0, 0, .7))',
    WebkitFontSmoothing: 'antialiased',
  },
});
