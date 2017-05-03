import {GET, PUT, POST, DELETE} from '../constants/request/methods';
import {APPLICATION_X_WWW_FORM_URL_ENCODED} from '../constants/request/headers/contentType';
import {XML_HTTP_REQUEST} from '../constants/request/headers/xRequestedWith';
export default {
    [GET]: [XML_HTTP_REQUEST, APPLICATION_X_WWW_FORM_URL_ENCODED],
    [POST]: [APPLICATION_X_WWW_FORM_URL_ENCODED],
    [PUT]: [APPLICATION_X_WWW_FORM_URL_ENCODED],
    [DELETE]: [XML_HTTP_REQUEST, APPLICATION_X_WWW_FORM_URL_ENCODED]
};
