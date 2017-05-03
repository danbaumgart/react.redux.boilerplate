import {INFORMATION, SUCCESSFUL, REDIRECTION, CLIENT_ERROR, SERVER_ERROR} from '../constants/response/statusTypes';
import KEYS from '../constants/response/statusClasses';
export default {
    [KEYS.INFORMATION]: INFORMATION,
    [KEYS.SUCCESSFUL]: SUCCESSFUL,
    [KEYS.REDIRECTION]: REDIRECTION,
    [KEYS.CLIENT_ERROR]: CLIENT_ERROR,
    [KEYS.SERVER_ERROR]: SERVER_ERROR
};

