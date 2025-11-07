import axios from 'axios';
import authHeader from './auth-header';

class SettingsService {
    getSettings() {
        return axios
            .get('/admin/settings/getSettings', {
                headers: authHeader()
            });
    }
    setSettings(data) {
        return axios
            .post('/admin/settings/setSettings', new FormData(data), {
                headers: authHeader()
            });
    }
}

export default new SettingsService();
