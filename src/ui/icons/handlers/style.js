import STATUS from '../constants/status';
import COLORS from '../constants/colors';
export default {
    [STATUS.WARNING]: {color: COLORS.WARNING},
    [STATUS.ERROR]: {color: COLORS.ERROR},
    [STATUS.SUCCESS]: {color: COLORS.SUCCESS},
    [STATUS.INFO]: {color: COLORS.INFO}
};
