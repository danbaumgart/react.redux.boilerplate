import RequestHeaderHandler from '../handlers/requestHeaderTypes';
import StatusClassHandler from '../handlers/statusClassHandler';
import {EQUALS, AMPERSAND} from '../../utils/constants/characters'
import {STRING} from '../../utils/constants/dataTypes';
const HttpUtility = {
    toEncodedParameters(data){
        if(data && typeof data !== STRING)
            return Object.keys(data).map(key => [
                    encodeURIComponent(key),
                    encodeURIComponent(data[key])
                ].join(EQUALS)
            ).join(AMPERSAND);
        else return data;
    },
    toRequestHeader(headerValue){
        return RequestHeaderHandler[headerValue];
    },
    getStatusClass(statusCode){
        const classKey = Math.floor(statusCode/100);
        return StatusClassHandler[classKey];
    }
};
export const {toEncodedParameters, toRequestHeader, getStatusClass} = HttpUtility;
export default HttpUtility;
