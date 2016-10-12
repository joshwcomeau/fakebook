import Faker from 'faker';
import range from 'lodash.range';
import padStart from 'lodash.padstart';

const josh = {
  id: '0001',
  userName: 'joshwcomeau',
  firstName: 'Joshua',
  lastName: 'Comeau',
  intro: "Creator of Fakebook, serial pseudoentrepreneur. Couldn't decide if this ought to be called 'Fakebook' or 'Fauxbook'.",
  job: 'Unsplash',
  school: 'Vanier College',
  currentCity: 'Montreal',
  homeCity: 'Montreal',
  profilePhoto: 'http://placekitten.com/168/168',
  coverPhoto: Faker.image.abstract(),
};

const randomlyGeneratedUsers = {};
range(5).forEach(i => {
  // Start from '0002', since '0001' is hardcoded as 'joshwcomeau' above,
  // and we want to be 1-indexed instead of 0-indexed.
  const userNum = i + 1 + 1;

  const id = padStart(userNum, 4, '0');

  randomlyGeneratedUsers[id] = {
    id,
    userName: Faker.internet.userName(),
    firstName: Faker.name.firstName(),
    lastName: Faker.name.lastName(),
    intro: Faker.company.bs(),
    job: Faker.company.companyName(),
    school: Faker.company.companyName(),
    currentCity: Faker.address.city(),
    homeCity: Faker.address.city(),
    profilePhoto: Faker.image.avatar(),
    coverPhoto: Math.random() > 0.5 ? Faker.image.abstract() : null,
  };
})

export default {
  [josh.id]: josh,
  ...randomlyGeneratedUsers
};
