export const FETCH_USER_POSTS_REQUEST = 'FETCH_USER_POSTS_REQUEST';
export const FETCH_USER_POSTS_SUCCESS = 'FETCH_USER_POSTS_SUCCESS';
export const FETCH_USER_POSTS_FAILURE = 'FETCH_USER_POSTS_FAILURE';
export const FETCH_USER_PROFILE_REQUEST = 'FETCH_USER_PROFILE_REQUEST';
export const FETCH_USER_PROFILE_SUCCESS = 'FETCH_USER_PROFILE_SUCCESS';
export const FETCH_USER_PROFILE_FAILURE = 'FETCH_USER_PROFILE_FAILURE';
export const MARK_ALL_MESSAGES_AS_READ = 'MARK_ALL_MESSAGES_AS_READ';
export const MARK_ALL_NOTIFICATIONS_AS_READ = 'MARK_ALL_NOTIFICATIONS_AS_READ';
export const TOGGLE_FLYOUT = 'TOGGLE_FLYOUT';
export const VIEW_PROFILE_PAGE = 'VIEW_PROFILE_PAGE';


export const fetchUserPostsRequest = () => ({
  type: FETCH_USER_POSTS_REQUEST,
});

export const fetchUserPostsSuccess = ({ payload }) => ({
  type: FETCH_USER_POSTS_SUCCESS,
  payload,
});

export const fetchUserPostsFailure = error => ({
  type: FETCH_USER_POSTS_FAILURE,
  error,
});

export const fetchUserProfileRequest = () => ({
  type: FETCH_USER_PROFILE_REQUEST,
});

export const fetchUserProfileSuccess = ({ payload }) => ({
  type: FETCH_USER_PROFILE_SUCCESS,
  payload,
});

export const fetchUserProfileFailure = error => ({
  type: FETCH_USER_PROFILE_FAILURE,
  error,
});

export const markAllMessagesAsRead = () => ({
  type: MARK_ALL_MESSAGES_AS_READ,
});

export const markAllNotificationsAsRead = () => ({
  type: MARK_ALL_NOTIFICATIONS_AS_READ,
});

export const toggleFlyout = flyout => ({
  type: TOGGLE_FLYOUT,
  flyout,
});

export const viewProfilePage = ({ userName }) => ({
  type: VIEW_PROFILE_PAGE,
  userName,
})
