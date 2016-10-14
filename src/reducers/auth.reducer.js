// Here, more than any other area, I'm cutting some corners (at least,
// for now). As it stands, you're always logged in as one user. There's
// no way to create accounts or log out.
//
// Later, I may make a simplified auth system, where you can log in as
// any of the arbitrary users, to ensure that all the reducers update

import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

import {
  LOG_IN_SUCCESS,
  LOG_OUT,
} from '../actions';

const initialState = {
  loggedIn: false,
  currentUserId: null,
};

// ////////////////////
// Reducers //////////
// //////////////////
function loggedIn(state = initialState.loggedIn, action) {
  switch (action.type) {
    case LOG_IN_SUCCESS:
      return true;

    case LOG_OUT:
      return false;

    default:
      return state;
  }
}

function currentUserId(state = initialState.currentUserId, action) {
  switch (action.type) {
    case LOG_IN_SUCCESS:
      return action.user.id;

    case LOG_OUT:
      return null;

    default:
      return state;
  }
}

export default combineReducers({
  loggedIn,
  currentUserId,
});

// ////////////////////
// Selectors /////////
// //////////////////
const loggedInSelector = state => state.auth.loggedIn;
const currentUserIdSelector = state => state.auth.currentUserId;

// I feel a little funny about this; it's a selector that accesses a
// different slice of the state. If this becomes more complex, I think
// I ought to make a `src/selectors/` directory for shared selectors like
// this one.
const profilesByIdSelector = state => state.profiles.byId;

export const currentUserSelector = createSelector(
  loggedInSelector,
  currentUserIdSelector,
  profilesByIdSelector,
  (loggedIn, currentUserId, profilesById) => {
    if (!loggedIn) {
      return null;
    }

    return profilesById[currentUserId];
  }
);
