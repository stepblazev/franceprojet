import axios from 'axios';
import authHeader from './auth-header';
import {formData} from "./libs/formData";

class ArticlesService {

    createdArticles(data) {
        return axios
            .post('/admin/articles/created', data, {
                headers: authHeader()
            });
    }

    getArticles(pageNum) {
        return axios
            .get('/admin/articles/get', {
                headers: authHeader(),
                params: {
                    page: pageNum
                }
            });
    }

    getArticle(id) {
        return axios
            .get('/admin/articles/getArticle', {
                headers: authHeader(),
                params: {
                    id: id
                }
            });
    }

    setStatus(data) {
        return axios
            .post('/admin/articles/setStatus', data, {
                headers: authHeader(),

            });
    }


    editArticles(data) {
        return axios
            .post('/admin/articles/edit', data, {
                headers: authHeader()
            });
    }

    remove(data) {
        return axios
            .post('/admin/articles/remove', data, {
                headers: authHeader()
            });
    }
}

export default new ArticlesService();
