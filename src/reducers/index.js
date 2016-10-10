import { combineReducers } from 'redux';

import profiles from './profiles.reducer';
import ui from './ui';


export default combineReducers({
  profiles,
  ui,
});
