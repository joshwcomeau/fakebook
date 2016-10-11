import range from 'lodash.range';
import sampleSize from 'lodash.samplesize';
import profiles from './profiles';

// Essentially, we just want to randomly assign a bunch of friends between the
// n fake users we've made; let's say 10 friends, on average, for every person.
const profileIds = Object.keys(profiles);

const totalNumOfFriends = profileIds.length * 2;

const friends = {};

// Start by creating a key in the 'friends' table for every profile ID.
// It will hold an array of that user's friend IDs.
profileIds.forEach(profileId => {
  friends[profileId] = [];
})

// Next, create an arbitrary number of friendships by populating the arrays
// in the object representing the 'friends' table.
range(totalNumOfFriends).forEach(() => {
  const [profileId1, profileId2] = sampleSize(profileIds, 2);

  // Ignore duplicate entries.
  if (friends[profileId1].includes(profileId2)) {
    return;
  }

  friends[profileId1].push(profileId2);
  friends[profileId2].push(profileId1);
});

export default friends;
