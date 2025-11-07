import axios from 'axios';
import authHeader from './auth-header';
import {formData} from "./libs/formData";

class RequestService {

    get(pageNum) {
        return axios
            .get('/admin/request/getFullForm', {
                headers: authHeader(),
                params: {
                    page: pageNum
                }
            });
    }

    getFullFormTwo(pageNum) {
        return axios
            .get('/admin/request/getFullFormTwo', {
                headers: authHeader(),
                params: {
                    page: pageNum
                }
            });
    }
    getContact(pageNum) {
        return axios
            .get('/admin/request/getContact', {
                headers: authHeader(),
                params: {
                    page: pageNum
                }
            });
    }

    setStatus(data) {
        return axios
            .post('/admin/request/setStatus', data, {
                headers: authHeader()
            });
    }
}

export default new RequestService();
