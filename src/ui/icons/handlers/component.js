import STATUS from '../constants/status';
import {AlertWarning, AlertError, ActionInfo, ActionCheckCircle} from 'material-ui/svg-icons';
export default {
    [STATUS.WARNING]: AlertWarning,
    [STATUS.ERROR]: AlertError,
    [STATUS.INFO]: ActionInfo,
    [STATUS.SUCCESS]: ActionCheckCircle
};
