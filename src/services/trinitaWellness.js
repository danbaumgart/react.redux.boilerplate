import HttpProxy from '../http/models/httpService';
import {URL} from './constants/apiResources';
class TrinitaWellness extends HttpProxy {
    constructor(resource) {
        super(URL + resource);
    }
}
export default TrinitaWellness;
