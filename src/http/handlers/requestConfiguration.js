import {toEncodedParameters} from '../utils/httpUtils';
import MethodHeadersHandler from './methodHeaderValues';
import METHODS from '../constants/request/methods';
import {toRequestHeader} from '../utils/httpUtils';
import CONTENT_TYPE from '../constants/request/headers/contentType';
class RequestConfiguration {
    constructor(resourceUrl, methodType, resolve, reject, data) {
        this.resourceUrl = resourceUrl;
        this.methodType = methodType;
        this.promiseHandlers = {resolve, reject};
        this.requestHeaders = MethodHeadersHandler[methodType].map(toRequestHeader);
        this.params =  RequestConfiguration.MapParams(this.requestHeaders, data);
    }
    static MapParams(requestHeaders, data) {
        const contentType = requestHeaders.find(requestHeader => requestHeader.header === CONTENT_TYPE.HEADER);
        if (contentType && contentType.value === CONTENT_TYPE.APPLICATION_JSON)
            return JSON.stringify(data);
        return toEncodedParameters(data);
    }
}
class GetConfiguration extends RequestConfiguration{
    constructor(resourceUrl, resolve, reject, data){
        super(resourceUrl, METHODS.GET, resolve, reject, data);
    }
}
class PostConfiguration extends RequestConfiguration{
    constructor(resourceUrl, resolve, reject, data){
        super(resourceUrl, METHODS.POST, resolve, reject, data);
    }
}
class PutConfiguration extends RequestConfiguration{
    constructor(resourceUrl, resolve, reject, data){
        super(resourceUrl, METHODS.PUT, resolve, reject, data);
    }
}
class DeleteConfiguration extends RequestConfiguration{
    constructor(resourceUrl, resolve, reject, data){
        super(resourceUrl, METHODS.DELETE, resolve, reject, data);
    }
}
export default {
    [METHODS.GET]: GetConfiguration,
    [METHODS.POST]: PostConfiguration,
    [METHODS.PUT]: PutConfiguration,
    [METHODS.DELETE]: DeleteConfiguration
};
