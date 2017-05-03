import {StatusClassHandler} from '../handlers/statusClassHandler';
import {getStatusClass} from '../utils/httpUtils';
import StatusCodeHandler from '../handlers/statusCodeHandler';
class RequestStatus {
    constructor(status) {
        this.code = status;
        this.type = getStatusClass(status);
        this.text = StatusCodeHandler[status];
    }
}
export default RequestStatus;
