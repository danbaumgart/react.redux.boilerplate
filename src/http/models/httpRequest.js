import {ACTIVE_X_OBJECT_NAME} from '../constants/request/requestTypes';
import {NOT_MODIFIED, OK} from '../constants/response/statusCodes';
import {GET} from '../constants/request/methods';
import {DONE} from '../constants/request/readyStates';
import {FUNCTION} from '../../utils/constants/dataTypes';
import RequestHeaderValueHandler from '../handlers/requestHeaderTypes';
import RequestStatus from './requestStatus';
import RequestHeader from './requestHeader';
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
        console.log("REQUEST HEADERS", config.requestHeaders);
        this.open(config.methodType, config.resourceUrl);
        this.setRequestHeaders(config.requestHeaders);
        console.log("THIS AJAX", this.ajax);
        this.send(config.params);
    }
    static Initialize() {
        //return window.XMLHttpRequest ?
        return new XMLHttpRequest();
        //new ActiveXObject(ACTIVE_X_OBJECT_NAME);
    }
    open(methodType, resourceUrl) {
        this.ajax.open(methodType, resourceUrl, true);
    }
    setRequestHeaders(requestHeaders) {
        const ajax = this.ajax;
        console.log("REQUEST HEADERS", requestHeaders);
        console.log("EVERY HEADER IS INSTANCE OF RequestHeader", requestHeaders.every(requestHeader => requestHeader instanceof RequestHeader));
        requestHeaders.forEach(requestHeader => {
            const {header, value} = requestHeader;
            console.log("REQ HEAD", requestHeader);
            if(header && value){
                console.log("HEADER", header, "VALUE", value);
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
               // const status = new RequestStatus(this.status);
                if (this.status === OK || this.status === NOT_MODIFIED)
                    resolve(JSON.parse(this.responseText));
                //else reject({status, description: this.statusText});
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
