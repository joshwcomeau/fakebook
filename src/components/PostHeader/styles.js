import { StyleSheet } from 'aphrodite';
import { mediumGrey } from '../../style-variables';

export default StyleSheet.create({
  postHeader: {
    padding: '12px',
  },
  profilePhoto: {
    width: '40px',
    height: '40px',
    float: 'left',
    marginRight: '8px',
  },
  title: {
    fontSize: '14px',
    lineHeight: 1.38,
    color: mediumGrey,
  },
  authorName: {
    fontWeight: 'bold',
  },
  date: {
    color: mediumGrey,
    WebkitFontSmoothing: 'subpixel-antialiased',
    fontSize: '12px',
  },
});
