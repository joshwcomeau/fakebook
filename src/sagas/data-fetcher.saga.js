/* eslint-disable no-unused-vars */
import { takeEvery, takeLatest } from 'redux-saga';
import { take, call, put, fork, select } from 'redux-saga/effects';

import * as API from '../utils/API.utils';
import {
  FETCH_USER_POSTS_REQUEST,
  FETCH_USER_PROFILE_REQUEST,
  VIEW_PROFILE_PAGE,
  fetchUserPostsRequest,
  fetchUserPostsSuccess,
  fetchUserPostsFailure,
  fetchUserProfileRequest,
  fetchUserProfileSuccess,
  fetchUserProfileFailure,
} from '../actions';


function* fetchUserProfileData({ userName }) {
  try {
    const profile = yield call(API.fetchUserProfileData, { userName });
    yield put(fetchUserProfileSuccess({ payload: { profile } }));
    return profile;
  } catch (error) {
    yield put(fetchUserProfileFailure({ error }));
  }
}

function* fetchUserPostsData({ userName }) {
  try {
    const posts = yield call(API.fetchUserPostsData, { userName });
    yield put(fetchUserPostsSuccess({ payload: { posts } }));
    return posts;
  } catch (error) {
    yield put(fetchUserPostsFailure({ error }));
  }
}

function* fetchDataForProfilePage({ userName }) {
  console.log("FETCHING", userName)
  // For a profile page, we need:
  //   - The user's profile data (username, avatar, whatever)
  //   - The user's most recent posts
  //   - Other user info:
  //       - Top 9 friends,
  //       - People who have reacted to the posts on the main feed.

  // Start by dispatching our 'REQUEST' actions,
  // so we can display a loading indicator.
  yield [
    put(fetchUserProfileRequest()),
    put(fetchUserPostsRequest())
  ];

  // To actually fetch the data, we'll request our user's profile data and
  // posts in parallel.
  const [profile, posts] = yield [
    call(fetchUserProfileData, { userName }),
    call(fetchUserPostsData, { userName }),
  ]

  // If either the profile or the posts could not be located, we're done.
  // Error-handling was already tackled by the sub-sagas.
  if (!profile || !posts) {
    return;
  }

  // Now that we have all the posts, we need to get the associated users!
  // Both our profile's friends, as well as the people who have liked/commented
  // on our posts.
  // TODO
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
