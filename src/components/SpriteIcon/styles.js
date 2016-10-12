import { StyleSheet } from 'aphrodite';
import iconSprite from '../../images/icon-sprite.png';
import iconSpriteAlt from '../../images/icon-sprite-alt.png';
import iconSpriteProfile from '../../images/icon-sprite-profile.png';
import iconSpriteMedia from '../../images/icon-sprite-media.png';

const iconSpriteStyles = {
  backgroundImage: `url(${iconSprite})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'auto',
}

const iconSpriteAltStyles = {
  backgroundImage: `url(${iconSpriteAlt})`,
  backgroundSize: '500px 284px',
}

const iconSpriteProfileStyles = {
  backgroundImage: `url(${iconSpriteProfile})`,
  backgroundSize: '27px 338px',
}

const iconSpriteMediaStyles = {
  backgroundImage: `url(${iconSpriteMedia})`,
  backgroundSize: '53px 222px',
}

export default StyleSheet.create({
  spriteIcon: {
    display: 'block',
    // Most icons are 24x24, but not all.
    // These values may be overwritten by other styles.
    width: '24px',
    height: '24px',
    ...iconSpriteStyles,
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
    width: '17px',
    height: '9px',
    backgroundPosition: '-113px -220px',
    ...iconSpriteAltStyles,
  },
  blueWorld: {
    backgroundPosition: '0 -22px',
    ...iconSpriteProfileStyles,
  },
  pinkFriends: {
    backgroundPosition: '0 -180px',
    ...iconSpriteMediaStyles,
  },
  workProfile: {
    backgroundPosition: '-13px -312px',
    width: '12px',
    height: '12px',
    ...iconSpriteProfileStyles,
  },
  schoolProfile: {
    backgroundPosition: '0 -312px',
    width: '12px',
    height: '12px',
    ...iconSpriteProfileStyles,
  },
  homeProfile: {
    backgroundPosition: '-13px -273px',
    width: '12px',
    height: '12px',
    ...iconSpriteProfileStyles,
  },
  mapPinProfile: {
    backgroundPosition: '0 -299px',
    width: '12px',
    height: '12px',
    ...iconSpriteProfileStyles,
  },
});
