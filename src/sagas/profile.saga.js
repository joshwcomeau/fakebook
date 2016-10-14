/* eslint-disable no-unused-vars */
import { takeEvery, takeLatest } from 'redux-saga';
import { take, call, put, fork, select } from 'redux-saga/effects';

import * as API from '../utils/API.utils';
import {
  VIEW_PROFILE_PAGE,
  fetchUserFriendsRequest,
  fetchUserFriendsSuccess,
  fetchUserFriendsFailure,
  fetchUserPostsRequest,
  fetchUserPostsSuccess,
  fetchUserPostsFailure,
  fetchUserProfileRequest,
  fetchUserProfileSuccess,
  fetchUserProfileFailure,
} from '../actions';


// This helper function creates our data-fetching functions.
// The fetchMethod is one of the API methods to call, and it's called with
// an identifier.
// For example, when fetching a user's profile, the identifier is the
// `userName` (because we don't yet have their ID).
// We also supply onSuccess/onFailure actions, that will be dispatched
// once the request succeeds/fails.
function fetchUserData({ fetchMethod, onSuccess, onFailure }) {
  return function* (identifier) {
    try {
      const payload = yield call(fetchMethod, identifier);
      yield put(onSuccess(payload));
      return payload;
    } catch (error) {
      console.log("Caught error", error, fetchMethod)
      yield put(onFailure({ error }));
    }
  }
}

const fetchUserProfileData = fetchUserData({
  fetchMethod: API.fetchUserProfileData,
  onSuccess: fetchUserProfileSuccess,
  onError: fetchUserProfileFailure,
});

const fetchUserPostsData = fetchUserData({
  fetchMethod: API.fetchUserPostsData,
  onSuccess: fetchUserPostsSuccess,
  onError: fetchUserPostsFailure,
});

const fetchUserFriendsData = fetchUserData({
  fetchMethod: API.fetchUserFriendsData,
  onSuccess: fetchUserFriendsSuccess,
  onError: fetchUserFriendsFailure,
});

function* fetchDataForProfilePage({ userName }) {
  // For a profile page, there are 3 main pieces of info we need.
  //   - Basic profile info
  //   - User's top friends
  //   - User's posts (along with the post comments, and some data about
  //      the author of those comments)
  //
  // The very first thing we need is the profile. This is both so that we
  // can partially load the page, and because we need their ID to fetch
  // the other bits of data we need.

  // Start by dispatching our 'REQUEST' actions,
  // so we can display a loading indicator.
  yield put(fetchUserProfileRequest());

  // Next, let's get the user's profile info.
  // This should be a fast request.
  const profilePayload = yield call(fetchUserProfileData, { userName });

  // If the profile could not be found, an appropriate error message will
  // have been dispatched inside the `fetchUserProfileData` subroutine.
  // The likely cause of this is trying to access a profile that doesn't
  // exist.
  if (!profilePayload) {
    return;
  }

  // Boom! We have a profile, and it's been sent to our redux store.
  // Our work is not yet done though.
  const userId = profilePayload.profile.id;

  // Let's grab the user's top 9 friends, and their recent posts.
  // To save time, we'll request them in parallel.
  const [friendsPayload, postsPayload] = yield [
    call(fetchUserFriendsData, { userId }),
    call(fetchUserPostsData, { userId, pageNum: 1, pageSize: 9 }),
  ]

  // Similarly to our profile fetch, if either request failed, bail out.
  if (!friendsPayload || !postsPayload) {
    return;
  }

  // Once we have the posts, we need to get the post feedback (likes/comments)
  // We'll save ourself some trouble and fetch both the comments themselves,
  // and some basic user data about the liker/commenter (name/avatar).
}


// ///////////////////
// WATCHERS /////////
// /////////////////
function* watchViewProfilePage() {
  yield* takeEvery(VIEW_PROFILE_PAGE, fetchDataForProfilePage);
}

export default function* () {
  yield [
    fork(watchViewProfilePage),
  ];
}
