import HttpProxy from '../http/models/httpService';
import {URL} from './constants/apiResources';
import {FORWARD_SLASH} from '../utils/constants/characters';
import {FUNCTION} from '../utils/constants/dataTypes';
class TrinitaWellness extends HttpProxy {
    constructor(resource, mapper) {
        super(URL + resource, mapper);
        this.isMapperProvided = () => typeof this.mapper === FUNCTION
    }
    Get(){
        return super.Get();
    }
    Delete(identifier){
        return super.Delete(null, FORWARD_SLASH + identifier);
    }
}
export default TrinitaWellness;
