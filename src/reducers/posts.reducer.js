import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import pickBy from 'lodash.pickby';
import sortBy from 'lodash.sortby';

import {
  FETCH_USER_POSTS_SUCCESS,
} from '../actions';

const initialState = {
  byId: {},
};

// ////////////////////
// Reducers //////////
// //////////////////
function byId(state = initialState.byId, action) {
  switch (action.type) {
    case FETCH_USER_POSTS_SUCCESS:
      return {
        ...state,
        ...action.posts,
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
const byIdSelector = state => state.posts.byId;
const currentProfileIdSelector = state => state.profiles.currentProfileId;

export const currentProfilePostsSelector = createSelector(
  byIdSelector,
  currentProfileIdSelector,
  (byId, currentProfileId) => {
    return pickBy(byId, post => post.authorId === currentProfileId);
  }
);

export const currentProfilePostsListSelector = createSelector(
  currentProfilePostsSelector,
  (currentProfilePosts) => {
    const postArray = Object.keys(currentProfilePosts).map(postId => ({
      ...currentProfilePosts[postId],
      id: postId,
    }));

    return sortBy(postArray, 'timestamp');
  }
);
