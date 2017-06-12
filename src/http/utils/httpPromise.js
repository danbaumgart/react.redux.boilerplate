import HttpRequest from '../models/httpRequest';
import RequestConfiguration from '../handlers/requestConfiguration';
import METHODS from '../constants/request/methods';
export default {
    GET(url, data) {
        return new Promise((resolve, reject) => {
            const config = new RequestConfiguration[METHODS.GET](url, resolve, reject, data);
            return new HttpRequest(config);
        })
    },
    POST(url, data) {
        return new Promise((resolve, reject) => {
            const config = new RequestConfiguration[METHODS.POST](url, resolve, reject, data);
            return new HttpRequest(config);
        });
    },
    PUT(url, data) {
        return new Promise((resolve, reject) => {
            const config = new RequestConfiguration[METHODS.PUT](url, resolve, reject, data);
            return new HttpRequest(config);
        });
    },
    DELETE(url, data) {
        return new Promise((resolve, reject) => {
            const config = new RequestConfiguration[METHODS.DELETE](url, resolve, reject, data);
            return new HttpRequest(config);
        });
    }
};
