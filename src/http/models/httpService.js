import HttpPromise from '../utils/httpPromise';
import {FUNCTION} from '../../utils/constants/dataTypes';
class HttpService {
    constructor(url, mapping) {
        this.url = url;
        if(typeof mapping === FUNCTION) this.mapper = mapping;
    }
    Get(data, endpoint) {
        return this.mapperExists() ?
            HttpPromise.DELETE(endpoint ? this.url + endpoint : this.url, data)
                .then(this.mapper.toViewModel) :
            HttpPromise.DELETE(endpoint ? this.url + endpoint : this.url, data);
    }
    Post(data, endpoint) {
        return this.mapperExists() ?
            HttpPromise.POST(endpoint ? this.url + endpoint : this.url, data)
                .then(this.mapper.toViewModel) :
            HttpPromise.POST(endpoint ? this.url + endpoint : this.url, data);
    }
    Put(data, endpoint) {
        return this.mapperExists() ?
            HttpPromise.PUT(endpoint ? this.url + endpoint : this.url, data)
                .then(this.mapper.toViewModel) :
            HttpPromise.PUT(endpoint ? this.url + endpoint : this.url, data);
    }
    Delete(data, endpoint) {
        return this.mapperExists() ?
            HttpPromise.DELETE(endpoint ? this.url + endpoint : this.url, data)
                .then(this.mapper.toViewModel) :
            HttpPromise.DELETE(endpoint ? this.url + endpoint : this.url, data);
    }
    mapperExists() {
        return typeof this.mapper === FUNCTION ? mapper : null;
    }
}
export default HttpService;
