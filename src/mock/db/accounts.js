import types from '../../enums/validation';

export const registration = {
  emailAddress: {
    [types.REQUIRED]: true,
    [types.MINIMUM_LENGTH]: 8,
    [types.EMAIL]: true
  },
  password: {
    [types.REQUIRED]: true,
    [types.MINIMUM_LENGTH]: 6,
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
    [types.MINIMUM_LENGTH]: 2,
    [types.MAXIMUM_LENGTH]: 20,
  },
  confirmPassword: {
    [types.REQUIRED]: true
  }
};
export const login = {
  emailAddress: {
    [types.REQUIRED]: true
  },
  password: {
    [types.REQUIRED]: true
  }
};
export const schema = {registration, login};
export const accounts = [{
  emailAddress: "danbaumgart@gmail.com",
  password: "baumgart",
  firstName: "Dan",
  lastName: "Baumgart"
}, {
  emailAddress: "kerrinenelson@email.com",
  password: "kerrine",
  firstName: "Kerrine",
  lastName: "Nelson"
}, {
  emailAddress: "johnndungu@email.com",
  password: "ndungu",
  firstName: "John",
  lastName: "Ndungu"
}, {
  emailAddress: "donnellschroeter@email.com",
  password: "schroeter",
  firstName: "Donnell",
  lastName: "Schroeter"
}
];
