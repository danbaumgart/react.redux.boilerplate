import TrinitaWellness from './trinitaWellness';
import {LOCATIONS} from './constants/apiResources';
class Locations extends TrinitaWellness {
    constructor() {
        super(LOCATIONS);
    }
    InsertLocation({Name, Street, City, State, Zip, Country, Institution}){
        return super.Post({Name, Street, City, State, Zip, Country, Institution}, null).then(response => response.content);
    }
}
export default new Locations();
