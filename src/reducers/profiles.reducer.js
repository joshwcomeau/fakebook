import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

import {
  FETCH_USER_PROFILE_SUCCESS,
  PROFILE_NOT_FOUND,
} from '../actions';

const initialState = {
  byId: {},
  currentProfileId: null,
};

// ////////////////////
// Reducers //////////
// //////////////////
function byId(state = initialState.byId, action) {
  switch (action.type) {
    case FETCH_USER_PROFILE_SUCCESS:
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

function currentProfileId(state = initialState.currentProfileId, action) {
  switch (action.type) {
    case FETCH_USER_PROFILE_SUCCESS:
      return action.payload.profile.id;

    default:
      return state;
  }
}

export default combineReducers({
  byId,
  currentProfileId,
});

// ////////////////////
// Selectors /////////
// //////////////////
const byIdSelector = state => state.profiles.byId;
const currentProfileIdSelector = state => state.profiles.currentProfileId;

const currentProfileSelector = createSelector(
  byIdSelector,
  currentProfileIdSelector,
  (byId, currentProfileId) => {
    console.log("BY ID", byId)
    return byId[currentProfileId];
  }
);

const firstNameSelector = createSelector(
  currentProfileSelector,
  currentProfile => currentProfile && currentProfile.firstName
);

const lastNameSelector = createSelector(
  currentProfileSelector,
  currentProfile => currentProfile && currentProfile.lastName
);

export const fullNameSelector = createSelector(
  firstNameSelector,
  lastNameSelector,
  (firstName, lastName) => (
    `${firstName} ${lastName}`
  )
);

export const currentProfileWithExtrasSelector = createSelector(
  currentProfileSelector,
  fullNameSelector,
  (currentProfile, fullName) => (currentProfile && {
    ...currentProfile,
    fullName,
  })
);
