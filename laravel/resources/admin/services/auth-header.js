export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('admin'));

    if (user && user.access_token) {
        return {
            Authorization: 'Bearer ' + user.access_token,
            'Content-Type': 'multipart/form-data'
        };
    } else {
        return {};
    }
}
