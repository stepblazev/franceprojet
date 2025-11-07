import axios from 'axios';
import authHeader from './auth-header';
import {formData} from "./libs/formData";

class UsersService {
    getUsers() {
        return axios
            .get('/admin/users/getUsers', {
                headers: authHeader()
            });
    }

    getSearch(data) {
        return axios
            .post('/admin/users/getSearch', new FormData(data), {
                headers: authHeader(),
            });
    }
}

export default new UsersService();
