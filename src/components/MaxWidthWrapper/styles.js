import { StyleSheet } from 'aphrodite';
import { maxWidthPx } from '../../style-variables.js';


export default StyleSheet.create({
  maxWidthWrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: maxWidthPx,
    margin: '0 auto',
  },
});
