import { combineReducers } from 'redux';
import {
  FETCH_USER_PROFILE_SUCCESS,
  PROFILE_NOT_FOUND,
} from '../actions';

const initialState = {
  byId: {},
};

// ////////////////////
// Reducers //////////
// //////////////////
function byId(state = initialState.byId, action) {
  switch (action.type) {
    case FETCH_USER_PROFILE_SUCCESS:
      console.log("Received action", action)
      return {
        ...state,
        [action.payload.profile.id]: action.payload.profile,
      };

    case PROFILE_NOT_FOUND:
      return {
        ...state,
        [action.id]: null,
      };

    default:
      return state;
  }
}

export default combineReducers({
  byId,
});

// ////////////////////
// Selectors /////////
// //////////////////
