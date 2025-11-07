import {getData} from "@/services/libs/formData";

export function formParams(data) {
    let params = getData(data);

    if(Object.keys(params).length > 1) {
        const url = new URL(window.location.href)

        for (let i in params){
            if(!url.searchParams.has(i)) {
                url.searchParams.append(i, params[i])
            }
        }
        window.history.pushState(null, null, url);
    }

    return params;
}

export function formParamsClear() {
    const url = new URL(window.location.href)

    for(let [name, value] of url.searchParams) {
       url.searchParams.delete(name);
    }

    window.history.pushState({}, '', url.toString());
}
