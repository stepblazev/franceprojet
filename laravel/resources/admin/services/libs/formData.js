export function formData(data) {
    const query = new FormData();

    for (let i in data) {
        query.append(i, data[i]);
    }
    return query;
}

export function getData(data) {

    const query = {}
    for (let i in data) {
        query[i] = data[i];
    }
    return query;
}
