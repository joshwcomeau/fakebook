import Faker from 'faker';
import range from 'lodash.range';
import padStart from 'lodash.padstart';
import sample from 'lodash.sample';

const josh = {
  id: '0001',
  userName: 'joshwcomeau',
  firstName: 'Joshua',
  lastName: 'Comeau',
  intro: "Creator of Fakebook, serial pseudoentrepreneur. Couldn't decide if this ought to be called 'Fakebook' or 'Fauxbook'.",
  work: [
    {
      role: 'Software Engineer',
      company: 'Khan Academy',
      isCurrent: true,
    },{
      role: 'Full-Stack Developer',
      company: 'Unsplash',
      isCurrent: false,
    }
  ],
  education: [
    {
      school: 'Vanier College',
      level: 'college',
    }, {
      school: 'M.I.N.D',
      level: 'high',
    },
  ],
  currentLocation: {
    city: 'Montreal',
    state: 'Quebec',
  },
  birthLocation: {
    city: 'Montreal',
    state: 'Quebec',
  },
  profilePhoto: 'http://placekitten.com/168/168',
  coverPhoto: 'http://placekitten.com/860/350',
};


const createWorkHistory = (numOfJobs = Math.floor(Math.random() * 3)) => {
  return range(numOfJobs).map(i => ({
    role: Faker.name.jobType(),
    company: Faker.company.companyName(),
    isCurrent: i === 0,
  }));
};

const createEducationHistory = (numOfSchools = Math.floor(Math.random() * 2)) => {
  return range(numOfSchools).map(() => ({
    school: Faker.company.companyName(),
    level: sample(['elementary', 'high', 'college', 'university']),
  }));
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
    work: createWorkHistory(),
    education: createEducationHistory(),
    currentLocation: {
      city: Faker.address.city(),
      state: Faker.address.state(),
    },
    birthLocation: {
      city: Faker.address.city(),
      state: Faker.address.state(),
    },
    profilePhoto: Faker.image.avatar(),
    coverPhoto: Math.random() > 0.5 ? Faker.image.abstract() : null,
  };
})

export default {
  [josh.id]: josh,
  ...randomlyGeneratedUsers
};
