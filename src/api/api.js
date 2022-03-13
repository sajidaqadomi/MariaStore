import axios from "axios";

import * as storage from "../utility/cache";
const URL = "http://localhost:5000/api/v1";

export const API = axios.create({ baseURL: URL });

API.interceptors.request.use((req) => {
    //if (authStorage.getToken()) {
    req.headers.Authorization = `Bearer ${storage.get("userToken")}`;
    //}

    return req;
});

const get = API.get; //override get to support cache
API.get = async (url, params, axiosConfig) => {
    try {
        const response = await get(url, params, axiosConfig);

        if (response.data) {
            storage.store(url, JSON.stringify(response.data));
            return response;
        }
        let data = JSON.parse(storage.get(url));
        return data ? { data } : response;

    } catch (error) {
        let data = JSON.parse(storage.get(url));
        let rootError = error?.response?.data?.error;

        let currError = typeof rootError === "string" ? rootError : "Network Error";
        return data ? { data } : { error: currError };
    }
};

// API.interceptors.request.use((req) => {
//     if (authStorage.getToken()) {
//         req.headers.Authorization = `Bearer ${authStorage.getToken()}`;
//     }

//     return req;
// });
