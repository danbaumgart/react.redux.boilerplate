import {CONTENT_TYPE, APPLICATION_X_WWW_FORM_URL_ENCODED, APPLICATION_JSON} from '../constants/request/headers/contentType';
import {X_REQUESTED_WITH, XML_HTTP_REQUEST} from '../constants/request/headers/xRequestedWith';
import RequestHeader from '../models/requestHeader';
class ContentType extends RequestHeader {
    constructor(value) {
        super(CONTENT_TYPE, value);
    }
}
class XRequestedWith extends RequestHeader {
    constructor(value) {
        super(X_REQUESTED_WITH, value);
    }
}
export default {
    [APPLICATION_X_WWW_FORM_URL_ENCODED]: new ContentType(APPLICATION_X_WWW_FORM_URL_ENCODED),
    [APPLICATION_JSON]: new ContentType(APPLICATION_JSON),
    [XML_HTTP_REQUEST]: new XRequestedWith(XML_HTTP_REQUEST)
};
