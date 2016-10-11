// Our Fake API request util.
// This is a front-end-only example. There is no server, but there is a util
// that pretends to connect to one. It exposes individual functions that make
// requests to invididual REST endpoints.
//
// NOTE: I was originally going to make a pseudo-graphql-client.
// For better or worse, though, most developers use REST APIs, and most front-
// end developers don't have control over the server to set up graphql.
// As such, this util mimics a common REST interface.
//
// All of the fake data is held in normalized data files, in /stubs
import find from 'lodash.find';
import profiles from '../stubs/profiles';
import friends from '../stubs/friends';

export const fetchUserProfileData = ({ userName }) => {
  return find(profiles, profile => profile.userName === userName);
}

export const fetchUserPostsData = ({ userName }) => {
  return [];
}
