import { StyleSheet } from 'aphrodite';
import { navy } from '../../style-variables';

export default StyleSheet.create({
  profileHeader: {
    position: 'relative',
    zIndex: 2,
    height: '205px',
    backgroundColor: navy,
  },

  tallProfileHeader: {
    height: '315px',
  },

  profilePhotoContainer: {
    position: 'absolute',
    display: 'block',
    left: '15px',
    bottom: '-28px',
    background: 'rgba(0,0,0,0.3)',
    padding: '1px',
    borderRadius: '3px',
  },

  profilePhoto: {
    display: 'block',
    width: '168px',
    height: '168px',
    borderRadius: '2px',
    border: '4px solid #FFFFFF',
  },

  fullName: {
    position: 'absolute',
    display: 'block',
    bottom: '12px',
    left: '200px',
    fontSize: '24px',
    fontWeight: 500,
    lineHeight: '30px',
    color: '#FFFFFF',
    textRendering: 'optimizeLegibility',
    textDecoration: 'none',
  },

  actions: {
    position: 'absolute',
    right: '15px',
    bottom: '15px',
  },

});
