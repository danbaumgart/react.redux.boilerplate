import ConstraintHandler from '../handlers/constraintHandler';
import CONSTRAINTS from '../constants/constraints';
import CRITERIA from './criteria';
const CONDITIONS = CRITERIA;
CONDITIONS.MAXIMUM = ConstraintHandler[CONSTRAINTS.MAXIMUM];
CONDITIONS.MINIMUM = ConstraintHandler[CONSTRAINTS.MINIMUM];
CONDITIONS.RESTRICT = ConstraintHandler[CONSTRAINTS.RESTRICT];
export default CONDITIONS;
