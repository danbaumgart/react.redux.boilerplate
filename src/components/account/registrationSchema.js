import {validationTypes as types} from '../../utils/validate';
export default {
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
