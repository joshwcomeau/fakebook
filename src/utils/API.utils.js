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
import pickBy from 'lodash.pickby';
import profiles from '../stubs/profiles';
import friends from '../stubs/friends';
import posts from '../stubs/posts';

export const authenticateUser = ({ authToken }) => {
  // For now, we're hardcore faking this.
  // No matter which auth token they provide, they're going to be
  // authenticated as our main user.
  //
  // TODO: A more sophisticated system, where you can supply different
  // values to select different users (or to represent a failed attempt).
  //
  // TODO: Authenticate with email/pass as well as via remembered token.

  const userId = Object.keys(profiles)[1];
  const user = profiles[userId];

  return user;
}

export const fetchUserProfileData = ({ userName }) => {
  const profile = find(profiles, profile => profile.userName === userName);

  // While we don't need to fetch the user's friends just yet, we do need
  // to know how many friends they have (this info appears early in the
  // profile page). I assume in a real backend this would be denormalized,
  // so that it can be read quickly.
  return {
    profile: {
      ...profile,
      numOfFriends: friends[profile.id].length,
    }
  };
}

export const fetchUserPostsData = ({ userId, pageNum, pageSize }) => {
  const userPosts = pickBy(posts, post => post.authorId === userId);

  return {
    posts: userPosts,
  };
}

export const fetchUserFriendsData = ({
  userId,
  pageNum = 0,
  pageSize = 20,
}) => {
  // We want to fetch both our friends, and the IDs of our friend's friends.
  // This is so we can easily identify mutual friends.
  //
  // This request is significant, so it's paginated. We're never fetching
  // too many friends at 1 time, regardless of how many friends our user has.
  //
  // Let's process this data in a way that's helpful for consumption.
  // We want the state to be something like:
  // {
  //   id: '001' <-- our main user
  //   friendIds: ['002', '003'], <-- our main user's friends
  //   friendProfiles: {
  //     '002': {
  //       firstName: 'Jane',
  //       ...
  //       friendIds: ['004', '005'], <-- our friend's friends.
  //     },
  //     '003': {
  //       id: '003',
  //       firstName: 'John',
  //       ...
  //       friendIds: ['006'],
  //     }
  //   }
  // }

  const friendIds = friends[userId].slice(pageNum * pageSize, pageSize);

  const friendProfiles = pickBy(profiles, profile => {
    return friendIds.includes(profile.id)
  });

  Object.keys(friendProfiles).forEach(profileId => {
    friendProfiles[profileId].friendIds = friends[profileId];
  });

  return {
    userId,
    friendIds,
    friendProfiles,
  }
}
