import { StyleSheet } from 'aphrodite';
import iconSprite from '../../images/icon-sprite.png';

export default StyleSheet.create({
  spriteIcon: {
    display: 'block',
    // Most icons are 24x24, but not all.
    // These values may be overwritten by other styles.
    width: '24px',
    height: '24px',
    backgroundImage: `url(${iconSprite})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto',
  },
  squareLogo: {
    backgroundPosition: '0 -163px',
  },
  friends: {
    backgroundPosition: '0 -188px',
  },
  messages: {
    backgroundPosition: '0 -338px',
  },
  notifications: {
    backgroundPosition: '0 -238px',
  },
});
