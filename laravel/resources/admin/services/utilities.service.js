import axios from 'axios';
import authHeader from './auth-header';

class UtilitiesService {
    getData() {
        return axios
            .get('/admin/utilities/getData', {
                headers: authHeader()
            });
    }
}

export default new UtilitiesService();
