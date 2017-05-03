import TrinitaWellnessProxy from './trinitaWellnessService';
import RESOURCES from './constants/resource';
class UniversityDetailsProxy extends TrinitaWellnessProxy {
    constructor() {
        super(RESOURCES.UNIVERSITY_DETAILS);
    }
    GetByName(name) {
        return super.Get('/name/', name).then(result => {
            console.log("RESULT", result);
            return result.content;
        });
    }
}
export default new UniversityDetailsProxy();
