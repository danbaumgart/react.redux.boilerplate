import CONDITIONS from '../constants/conditions';
import CRITERIA from '../constants/criteria';
import CONSTRAINTS from '../constants/constraints';
import {CHARACTERS, ONLY} from '../constants/validation';
import {toProperCase} from '../../utils/stringUtils';
const RESTRICT_ERROR = {
    [CONDITIONS.RESTRICT.ALPHA]: "Letters Only",
    [CONDITIONS.RESTRICT.ALPHANUMERIC]: `${toProperCase(CRITERIA.ALPHANUMERIC, "CHARACTERS", "ONLY")}`,
    [CONDITIONS.RESTRICT.NUMERIC]: `${toProperCase(CONDITIONS.NUMERIC, "CHARACTERS", "ONLY")}`,
    [CONDITIONS.RESTRICT.VALUE]: `${toProperCase(CONDITIONS.VALUE, "DOES", "NOT", "MATCH")}`,
    [CRITERIA.EMAIL]: `${toProperCase("INVALID", CRITERIA.EMAIL)}`,
    [CRITERIA.PHONE]: `${toProperCase("INVALID", CRITERIA.PHONE)}`
};
const MAXIMUM_ERROR = {
    [CONDITIONS.MAXIMUM.LENGTH]: maximum => `${toProperCase(CONSTRAINTS.MAXIMUM, CRITERIA.LENGTH, maximum)} Characters`,
    [CONDITIONS.MAXIMUM.VALUE]: maximum => `${toProperCase(CONSTRAINTS.MAXIMUM, CRITERIA.VALUE, maximum)}`,
};
const MINIMUM_ERROR = {
    [CONDITIONS.MAXIMUM.LENGTH]: minimum => `${toProperCase(CONSTRAINTS.MINIMUM, CRITERIA.LENGTH, minimum)} Characters`,
    [CONDITIONS.MAXIMUM.VALUE]: minimum => `${toProperCase(CONSTRAINTS.MINIMUM, CRITERIA.VALUE, minimum)}`,
    [CONDITIONS.MINIMUM.ALPHA]: minimum => `${toProperCase(CONSTRAINTS.MINIMUM, minimum, CRITERIA.ALPHA)} Characters`,
    [CONDITIONS.MINIMUM.ALPHANUMERIC]: minimum => `${toProperCase(CONSTRAINTS.MINIMUM, minimum, CRITERIA.ALPHANUMERIC)} Characters`,
    [CONDITIONS.MINIMUM.LOWERCASE]: minimum => `${toProperCase(CONSTRAINTS.MINIMUM, minimum, CRITERIA.LOWERCASE)} Characters`,
    [CONDITIONS.MINIMUM.UPPERCASE]: minimum => `${toProperCase(CONSTRAINTS.MINIMUM, minimum, CRITERIA.UPPERCASE)} Characters`,
    [CONDITIONS.MINIMUM.NUMERIC]: minimum => `${toProperCase(CONSTRAINTS.MINIMUM, minimum, CRITERIA.NUMERIC)} Characters`,
    [CONDITIONS.MINIMUM.SPECIAL]: minimum => `${toProperCase(CONSTRAINTS.MINIMUM, minimum, CRITERIA.SPECIAL)} Characters`
};
export default Object.assign({},
    RESTRICT_ERROR, MAXIMUM_ERROR, MINIMUM_ERROR, {
    [CONSTRAINTS.REQUIRED]: `${toProperCase(CONSTRAINTS.REQUIRED)} Field`
});
