import CONTENT_TYPE from '../constants/request/headers/contentType';
import X_REQUESTED_WITH from '../constants/request/headers/xRequestedWith';
import RequestHeader from '../models/requestHeader';
class ContentType extends RequestHeader {
    constructor(value) {
        super(CONTENT_TYPE.HEADER, value);
    }
}
class XRequestedWith extends RequestHeader {
    constructor(value) {
        super(X_REQUESTED_WITH.HEADER, value);
    }
}
export default {
    [CONTENT_TYPE.APPLICATION_X_WWW_FORM_URL_ENCODED]: new ContentType(CONTENT_TYPE.APPLICATION_X_WWW_FORM_URL_ENCODED),
    [CONTENT_TYPE.APPLICATION_JSON]: new ContentType(CONTENT_TYPE.APPLICATION_JSON),
    [X_REQUESTED_WITH.XML_HTTP_REQUEST]: new XRequestedWith(X_REQUESTED_WITH.XML_HTTP_REQUEST)
};
