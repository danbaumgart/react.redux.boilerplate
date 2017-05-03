import HttpProxy from '../http/models/httpProxy';
import RESOURCES from './constants/resource';
class TrinitaWellnessProxy extends HttpProxy {
  constructor(resource) {
    super(RESOURCES.URL + resource);
  }
}
export default TrinitaWellnessProxy;
