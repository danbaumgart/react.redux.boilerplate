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
        console.log("DATA", data);
        const responseMapper = this.mapper.responseMapper;
        console.log("RESPONSE MAPPER", responseMapper);
        return responseMapper(data);
    }
    getEndpointURL(endpoint) {
        return endpoint ? this.url + endpoint : this.url;
    }
    Get(data, endpoint) {
        const url = this.getEndpointURL(endpoint);
        const payload = this.requestMapper(data);
        return HttpPromise.GET(url, payload);
    }
    Post(data, endpoint) {
        const url = this.getEndpointURL(endpoint);
        const payload = this.requestMapper(data);
        return HttpPromise.POST(url, payload);
    }
    Put(data, endpoint) {
        const url = this.getEndpointURL(endpoint);
        const payload = this.requestMapper(data);
        return HttpPromise.PUT(url, payload);
    }
    Delete(data, endpoint) {
        const url = this.getEndpointURL(endpoint);
        const payload = this.requestMapper(data);
        return HttpPromise.DELETE(url, payload);
    }
}
export default HttpService;
