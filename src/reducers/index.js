import { combineReducers } from 'redux';

import profiles from './profiles.reducer';
import auth from './auth.reducer';
import ui from './ui';


export default combineReducers({
  profiles,
  auth,
  ui,
});
