import HttpRequest from '../models/httpRequest';
import Configuration from '../handlers/methodConfiguration';
import {GET, POST, PUT, DELETE} from '../constants/request/methods';
export default {
    GET(url, data) {
        return new Promise((resolve, reject) => {
            const config = new Configuration[GET](url, resolve, reject, data);
            return new HttpRequest(config);
        })
    },
    POST(url, data) {
        return new Promise((resolve, reject) => {
            const config = new Configuration[POST](url, resolve, reject, data);
            return new HttpRequest(config);
        });
    },
    PUT(url, data) {
        return new Promise((resolve, reject) => {
            const config = new Configuration[PUT](url, resolve, reject, data);
            return new HttpRequest(config);
        });
    },
    DELETE(url, data) {
        return new Promise((resolve, reject) => {
            const config = new Configuration[DELETE](url, resolve, reject, data);
            return new HttpRequest(config);
        });
    }
};
