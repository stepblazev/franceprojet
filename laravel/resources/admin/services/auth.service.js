import axios from 'axios';
import authHeader from "./auth-header";

const API_URL = '/admin/auth/login';

class AuthService {
    login(user) {
        return axios
            .post(API_URL, {
                email: user.email,
                password: user.password
            })
            .then(response => {
                if (response.data.access_token) {
                    localStorage.setItem('admin', JSON.stringify(response.data));
                }
                return response.data;
            });
    }

    getSession() {
        return axios
            .get('/admin/auth/session', {
                headers: authHeader()
            })
            .then(response => {
                return response.data;
            });
    }
    logout() {
        localStorage.removeItem('admin');
    }
}

export default new AuthService();
