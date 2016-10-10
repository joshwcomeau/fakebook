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
  logo: {
    margin: '7px 5px 7px -2px',
    float: 'left',
  },
  searchInput: {
    position: 'relative',
    top: '9px',
    width: '390px',
    height: '24px',
    padding: '0 5px',
    fontSize: '14px',
    float: 'left',
    border: 'none',
    borderRadius: '3px',
    outline: 'none',
  },
});
