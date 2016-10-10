import { StyleSheet } from 'aphrodite';
import iconSprite from '../../images/icon-sprite.png';

export default StyleSheet.create({
  squareLogoContainer: {
    position: 'relative',
    display: 'inline-block',
    outline: 'none',
    padding: '2px',
  },
  squareLogo: {
    backgroundImage: `url(${iconSprite})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto',
    backgroundPosition: '0 -163px',
    display: 'block',
    width: '24px',
    height: '24px',
  }
});
