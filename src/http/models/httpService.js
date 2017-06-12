import HttpPromise from '../utils/httpPromise';
import HttpMapper from './httpMapper';
class HttpService {
    constructor(url, httpMapper) {
        this.url = url;
        this.mapper = HttpMapper.isHttpMapper(httpMapper) ? httpMapper : new HttpMapper();
    }
    requestMapper(data) {
        return this.mapper.requestMapper(data);
    }
    responseMapper(data) {
        return this.mapper.responseMapper(data);
    }
    getEndpointURL(endpoint) {
        return endpoint ? this.url + endpoint : this.url;
    }
    Get(data, endpoint) {
        const url = this.getEndpointURL(endpoint);
        const payload = this.requestMapper(data);
        return HttpPromise.GET(url, payload).then(this.responseMapper);
    }
    Post(data, endpoint) {
        const url = this.getEndpointURL(endpoint);
        const payload = this.requestMapper(data);
        return HttpPromise.POST(url, payload).then(this.responseMapper);
    }
    Put(data, endpoint) {
        const url = this.getEndpointURL(endpoint);
        const payload = this.requestMapper(data);
        return HttpPromise.PUT(url, payload).then(this.responseMapper);
    }
    Delete(data, endpoint) {
        const url = this.getEndpointURL(endpoint);
        const payload = this.requestMapper(data);
        return HttpPromise.DELETE(url, payload).then(this.responseMapper);
    }
}
export default HttpService;
