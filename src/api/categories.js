import { API } from "./api";

export const getCategory = () => {
    return API.get(`/categories`)
}

