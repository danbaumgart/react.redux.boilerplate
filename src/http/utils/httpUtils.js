import RequestHeaderHandler from '../handlers/requestHeaderTypes';
import StatusClassHandler from '../handlers/statusClassHandler';
import CHARACTERS from '../../utils/constants/characters'
import DATA_TYPES from '../../utils/constants/dataTypes';
const HttpUtility = {
    toEncodedParameters(data){
        if(data && typeof data !== DATA_TYPES.STRING)
            return Object.keys(data).map(key => [
                    encodeURIComponent(key),
                    encodeURIComponent(data[key])
                ].join(CHARACTERS.EQUALS)
            ).join(CHARACTERS.AMPERSAND);
        else return encodeURIComponent(data);
    },
    toRequestHeader(headerValue){
        return RequestHeaderHandler[headerValue];
    },
    getStatusClass(statusCode){
        const classKey = Math.floor(statusCode/100);
        return StatusClassHandler[classKey];
    }
};
export const toQueryParameters = parameters => CHARACTERS.QUESTION_MARK + HttpUtility.toEncodedParameters(parameters);
export const {toEncodedParameters, toRequestHeader, getStatusClass} = HttpUtility;
export default HttpUtility;
