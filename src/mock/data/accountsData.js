import CONDITIONS from '../../utils/constants/validation';
export const schema = {
  emailAddress: {
    [CONDITIONS.REQUIRED]: true,
    [CONDITIONS.MINIMUM_LENGTH]: 8,
    [CONDITIONS.EMAIL]: true
  },
  password: {
    [CONDITIONS.REQUIRED]: true,
    [CONDITIONS.MINIMUM_LENGTH]: 1,
    [CONDITIONS.MINIMUM_SPECIAL]: 1,
    [CONDITIONS.MINIMUM_UPPERCASE]: 1,
    [CONDITIONS.MINIMUM_NUMERIC]: 1,
    [CONDITIONS.MINIMUM_LOWERCASE]: 1
  },
  firstName: {
    [CONDITIONS.RESTRICT_ALPHA]: true
  },
  lastName: {
    [CONDITIONS.REQUIRED]: true,
    [CONDITIONS.MINIMUM_LENGTH]: 4,
    [CONDITIONS.MAXIMUM_LENGTH]: 6
  }
};
export const accounts = [{
    emailAddress: "danbaumgart@gmail.com",
    password: "baumgart",
    firstName: "Dan",
    lastName: "Baumgart"
  }, {
    emailAddress: "willstampley@gmail.com",
    password: "stampley",
    firstName: "Will",
    lastName: "Stampley"
  }, {
    emailAddress: "joeshehata@gmail.com",
    password: "shehata",
    firstName: "Joe",
    lastName: "Shehata"
  }, {
    emailAddress: "enriquesarranovalle@gmail.com",
    password: "sarranovalle",
    firstName: "Enrique",
    lastName: "Sarrano Valle"
  }
];
