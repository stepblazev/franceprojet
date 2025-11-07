import axios from 'axios';
import authHeader from './auth-header';
import {formData} from "./libs/formData";

class ProjectsService {

    created(data) {
        return axios
            .post('/admin/projects/created', data, {
                headers: authHeader()
            });
    }

    get(pageNum) {
        return axios
            .get('/admin/projects/get', {
                headers: authHeader(),
                params: {
                    page: pageNum
                }
            });
    }

    getBy(id) {
        return axios
            .get('/admin/projects/getBy', {
                headers: authHeader(),
                params: {
                    id: id
                }
            });
    }

    setStatus(data) {
        return axios
            .post('/admin/projects/setStatus', data, {
                headers: authHeader(),

            });
    }


    edit(data) {
        return axios
            .post('/admin/projects/edit', data, {
                headers: authHeader()
            });
    }

    remove(data) {
        return axios
            .post('/admin/projects/remove', data, {
                headers: authHeader()
            });
    }
}

export default new ProjectsService();
