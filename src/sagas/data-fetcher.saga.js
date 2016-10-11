/* eslint-disable no-unused-vars */
import { takeEvery, takeLatest } from 'redux-saga';
import { take, call, put, fork, select } from 'redux-saga/effects';

import {
  fetchUserProfileData,
  fetchUserPostsData,
} from '../utils/API.utils';
import {
  FETCH_USER_POSTS_REQUEST,
  FETCH_USER_PROFILE_REQUEST,
  VIEW_PROFILE_PAGE,
  fetchUserPostsRequest,
  fetchUserProfileRequest,
  fetchUserProfileFailure,
} from '../actions';


function* fetchDataForProfilePage({ userName }) {
  // For a profile page, we need:
  //   - The user's profile data (username, avatar, whatever)
  //   - The user's most recent posts
  //   - Other user info:
  //       - Top 9 friends,
  //       - People who have reacted to the posts on the main feed.
  console.log("Fetching data for", userName)

  // Start by dispatching our 'REQUEST' actions,
  // so we can display a loading indicator.
  yield put(fetchUserProfileRequest());
  yield put(fetchUserPostsRequest());

  // We can start requesting the user's posts early, in a non-blocking way.
  // This is a timesaver; we don't need the user's profile to be loaded before
  // we can start fetching its posts!
  const postsData = yield fork(fetchUserPostsData, userName);

  // Next, we want to start requesting user data.
  // First, we need the user's profile data. If this fails, it means we've
  // tried to access the profile of a user who doesn't exist.
  try {
    const profileData = yield call(fetchUserProfileData, userName);
  } catch (error) {
    yield put(fetchUserProfileFailure(error));
    return;
  }


  const [profile, posts] = [
    yield call(fetchUserProfileData, userName),
    yield call(fetchUserPostsData, userName),
  ]
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
