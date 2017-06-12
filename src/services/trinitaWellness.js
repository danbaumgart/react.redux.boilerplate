import HttpProxy from '../http/models/httpService';
import {URL} from './constants/apiResources';
import CHARACTERS from '../utils/constants/characters';
class TrinitaWellness extends HttpProxy {
    constructor(resource, mapper) {
        super(URL + resource, mapper);
    }
    Get(identifier) {
        return identifier ?
            super.Get(null, CHARACTERS.FORWARD_SLASH + identifier) :
            super.Get();
    }
    Put(data, identifier) {
        return super.Put(data, CHARACTERS.FORWARD_SLASH + identifier);
    }
    Delete(identifier) {
        return super.Delete(null, CHARACTERS.FORWARD_SLASH + identifier);
    }
}
export default TrinitaWellness;
