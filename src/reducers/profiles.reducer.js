import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

import {
  FETCH_USER_FRIENDS_SUCCESS,
  FETCH_USER_PROFILE_SUCCESS,
} from '../actions';
import { pickValues } from '../utils/misc.utils';

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
        [action.profile.id]: action.profile,
      };

    case FETCH_USER_FRIENDS_SUCCESS:
      return {
        ...state,
        // Update our current profile with this new list of friends
        [action.userId]: {
          ...state[action.userId],
          friendIds: action.friendIds,
        },
        // Add the profiles of all our friends (including their own friendIds)
        ...action.friendProfiles,
      };


    default:
      return state;
  }
}

function currentProfileId(state = initialState.currentProfileId, action) {
  switch (action.type) {
    case FETCH_USER_PROFILE_SUCCESS:
      return action.profile.id;

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

export const currentProfileSelector = createSelector(
  byIdSelector,
  currentProfileIdSelector,
  (byId, currentProfileId) => byId[currentProfileId]
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

export const currentProfileFriendsSelector = createSelector(
  currentProfileIdSelector,
  byIdSelector,
  (currentProfileId, byId) => {
    const { friendIds } = byId[currentProfileId];

    return pickValues(byId, friendIds);
  }
);
