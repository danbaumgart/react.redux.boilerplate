import {NOT_MODIFIED, OK} from '../constants/response/statusCodes';
import {GET} from '../constants/request/methods';
import {DONE} from '../constants/request/readyStates';
import {FUNCTION} from '../../utils/constants/dataTypes';
import RequestStatus from './requestStatus';
class HttpRequest {
    constructor(config) {
        this.ajax = HttpRequest.Initialize();
        this.ajax.withCredentials = false;
        if(config.methodType !== GET)
            this.onReadyStateChange(config.promiseHandlers);
        else{
            this.onLoad(config.promiseHandlers);
            this.onError(config.promiseHandlers);
        }
        this.open(config.methodType, config.resourceUrl);
        this.setRequestHeaders(config.requestHeaders);
        this.send(config.params);
    }
    static Initialize() {
        return new XMLHttpRequest();
    }
    open(methodType, resourceUrl) {
        this.ajax.open(methodType, resourceUrl, true);
    }
    setRequestHeaders(requestHeaders) {
        const ajax = this.ajax;
        requestHeaders.forEach(requestHeader => {
            const {header, value} = requestHeader;
            if(header && value){
                ajax.setRequestHeader(header, value);
            }
        });
    }
    onReadyStateChange({resolve, reject}){
        this.ajax.onreadystatechange = function() {
            const status = new RequestStatus(this.status);
            if (this.readyState === DONE) {
                if(status.code === OK || status.code === NOT_MODIFIED)
                    resolve(JSON.parse(this.responseText));
                else reject({status, description: this.statusText});
            }

        };
    }
    onLoad({resolve, reject}) {
        if(typeof resolve === FUNCTION && typeof reject === FUNCTION) {
            this.ajax.onload = function () {
                if (this.status === OK || this.status === NOT_MODIFIED)
                    resolve(JSON.parse(this.responseText));
            };
        }

    }
    onError({reject}) {
        if (typeof reject === FUNCTION)
            this.ajax.onerror = function(){
                const status = new RequestStatus(this.status);
                reject({status, description: this.statusText});
            };
    }
    send(params) {
        if(params) this.ajax.send(params);
        else this.ajax.send();
    }
}
export default HttpRequest;
