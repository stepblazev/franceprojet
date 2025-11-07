import axios from 'axios';
import authHeader from './auth-header';
import {formData} from "./libs/formData";

class BlogsService {

    created(data) {
        return axios
            .post('/admin/blogs/created', data, {
                headers: authHeader()
            });
    }

    get(pageNum) {
        return axios
            .get('/admin/blogs/get', {
                headers: authHeader(),
                params: {
                    page: pageNum
                }
            });
    }

    getBy(id) {
        return axios
            .get('/admin/blogs/getBy', {
                headers: authHeader(),
                params: {
                    id: id
                }
            });
    }

    setStatus(data) {
        return axios
            .post('/admin/blogs/setStatus', data, {
                headers: authHeader(),

            });
    }


    edit(data) {
        return axios
            .post('/admin/blogs/edit', data, {
                headers: authHeader()
            });
    }

    remove(data) {
        return axios
            .post('/admin/blogs/remove', data, {
                headers: authHeader()
            });
    }
}

export default new BlogsService();
