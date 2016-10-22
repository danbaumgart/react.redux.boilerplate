import {validationTypes as types} from '../../utils/validate';
export let schema = {
  emailAddress: Object.assign({},
    {[types.REQUIRED]: true},
    {[types.MINIMUM_LENGTH]: 8},
    {[types.EMAIL]: true}
  ),
  password: Object.assign({},
    {[types.REQUIRED]: true},
    {[types.MINIMUM_LENGTH]: 1},
    {[types.MINIMUM_SPECIAL]: 1},
    {[types.MINIMUM_UPPERCASE]: 1},
    {[types.MINIMUM_NUMERIC]: 1},
    {[types.MINIMUM_LOWERCASE]: 1}
  ),
  firstName: Object.assign({},
    {[types.RESTRICT_ALPHA]: true}
  ),
  lastName: Object.assign({},
    {[types.REQUIRED]: true},
    {[types.MINIMUM_LENGTH]: 4},
    {[types.MAXIMUM_LENGTH]: 6}
  )
};
export let accounts = [
  {
    emailAddress: "danbaumgart@gmail.com",
    password: "baumgart",
    firstName: "Dan",
    lastName: "Baumgart"
  },
  {
    emailAddress: "willstampley@gmail.com",
    password: "stampley",
    firstName: "Will",
    lastName: "Stampley"
  },
  {
    emailAddress: "joeshehata@gmail.com",
    password: "shehata",
    firstName: "Joe",
    lastName: "Shehata"
  },
  {
    emailAddress: "enriquesarranovalle@gmail.com",
    password: "sarranovalle",
    firstName: "Enrique",
    lastName: "Sarrano Valle"
  }
];
