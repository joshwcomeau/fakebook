import { StyleSheet } from 'aphrodite';
import iconSprite from '../../images/icon-sprite.png';
import iconSpriteAlt from '../../images/icon-sprite-alt.png';
import iconSpriteProfile from '../../images/icon-sprite-profile.png';

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
  friendsLight: {
    backgroundPosition: '0 -213px',
  },
  friendsDark: {
    backgroundPosition: '0 -188px',
  },
  messagesLight: {
    backgroundPosition: '0 -363px',
  },
  messagesDark: {
    backgroundPosition: '0 -338px',
  },
  notificationsLight: {
    backgroundPosition: '0 -263px',
  },
  notificationsDark: {
    backgroundPosition: '0 -238px',
  },
  profileTabNub: {
    backgroundImage: `url(${iconSpriteAlt})`,
    backgroundSize: '500px 284px',
    backgroundPosition: '-113px -220px',
    width: '17px',
    height: '9px',
  },
  blueWorld: {
    backgroundImage: `url(${iconSpriteProfile})`,
    backgroundSize: '27px 338px',
    backgroundPosition: '0 -22px',
  },
});
