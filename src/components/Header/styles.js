import { StyleSheet } from 'aphrodite';
import {
  primaryColor,
  darkerPrimaryColor,
} from '../../style-variables.js';


const headerHeight = '43px';

export default StyleSheet.create({
  headerContainer: {
    position: 'relative',
    zIndex: 10,
    height: headerHeight,
    minWidth: '100%',
  },
  header: {
    position: 'fixed',
    width: '100%',
    top: '0',
    height: headerHeight,
    backgroundColor: primaryColor,
    borderBottom: `1px solid ${darkerPrimaryColor}`,
    color: '#FFFFFF',
  },
  headerContents: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  headerSearch: {
    flex: '1 1 auto',
  },
  headerNavigation: {
    flex: '0 0 auto',
    height: headerHeight,
    lineHeight: headerHeight,
  },
  headerNavigationChunk: {
    display: 'inline-block',
    height: headerHeight,
    padding: '0 9px',
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
