import HttpPromise from '../utils/httpPromise';
import {FUNCTION} from '../../utils/constants/dataTypes';
class HttpService {
    constructor(url, mapper) {
        this.url = url;
        if(typeof mapper === FUNCTION) this.mapper = mapper;
    }
    Get(endpoint, data) {
        return HttpPromise.GET(endpoint ? this.url + endpoint : this.url, data);
    }
    Post(endpoint, data) {
        return HttpPromise.POST(endpoint ? this.url + endpoint : this.url, data);
    }
    Put(endpoint, data) {
        return HttpPromise.PUT(endpoint ? this.url + endpoint : this.url, data);
    }
    Delete(endpoint, data) {
        return HttpPromise.DELETE(endpoint ? this.url + endpoint : this.url, data);
    }
}
export default HttpService;
