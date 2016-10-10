import { StyleSheet } from 'aphrodite';
import {
  primaryColor,
  darkerPrimaryColor,
} from '../../global-styles.js';

export default StyleSheet.create({
  headerContainer: {
    position: 'relative',
    height: '43px',
    minWidth: '100%',
  },
  header: {
    position: 'fixed',
    width: '100%',
    top: '0',
    height: '43px',
    lineHeight: '43px',
    backgroundColor: primaryColor,
    borderBottom: `1px solid ${darkerPrimaryColor}`,
    color: '#FFFFFF',
  },
  headerContents: {
    background: 'red',
  },
});
