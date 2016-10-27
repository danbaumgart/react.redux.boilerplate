import types from '../../utils/enums/validation';
export const schema = {
  emailAddress: {
    [types.REQUIRED]: true,
    [types.MINIMUM_LENGTH]: 8,
    [types.EMAIL]: true
  },
  password: {
    [types.REQUIRED]: true,
    [types.MINIMUM_LENGTH]: 1,
    [types.MINIMUM_SPECIAL]: 1,
    [types.MINIMUM_UPPERCASE]: 1,
    [types.MINIMUM_NUMERIC]: 1,
    [types.MINIMUM_LOWERCASE]: 1
  },
  firstName: {
    [types.RESTRICT_ALPHA]: true
  },
  lastName: {
    [types.REQUIRED]: true,
    [types.MINIMUM_LENGTH]: 4,
    [types.MAXIMUM_LENGTH]: 6
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
