import {toEncodedParameters} from '../utils/httpUtils';
import MethodHeadersHandler from './methodHeaderValues';
import {GET, PUT, POST, DELETE} from '../constants/request/methods';
import {toRequestHeader} from '../utils/httpUtils';
class RequestConfiguration {
    constructor(resourceUrl, methodType, resolve, reject, data, ...requestHeaders) {
        this.resourceUrl = resourceUrl;
        this.methodType = methodType;
        this.params = toEncodedParameters(data);
        this.promiseHandlers = {resolve, reject};
        this.requestHeaders = requestHeaders.map(toRequestHeader);
    }
}
class GetConfiguration extends RequestConfiguration{
    constructor(resourceUrl, resolve, reject, data){
        super(resourceUrl, GET, resolve, reject, data, ...MethodHeadersHandler[GET]);
    }
}
class PostConfiguration extends RequestConfiguration{
    constructor(resourceUrl, resolve, reject, data){
        super(resourceUrl, POST, resolve, reject, data, ...MethodHeadersHandler[POST]);
    }
}
class PutConfiguration extends RequestConfiguration{
    constructor(resourceUrl, resolve, reject, data){
        super(resourceUrl, PUT, resolve, reject, data, ...MethodHeadersHandler[PUT]);
    }
}
class DeleteConfiguration extends RequestConfiguration{
    constructor(resourceUrl, resolve, reject, data){
        super(resourceUrl, DELETE, resolve, reject, data, ...MethodHeadersHandler[DELETE]);
    }
}
export default {
    [GET]: GetConfiguration,
    [POST]: PostConfiguration,
    [PUT]: PutConfiguration,
    [DELETE]: DeleteConfiguration
};
