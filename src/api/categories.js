import { API } from "./api";

// export const getCategory = () => {
//     return API.get(`/categories`)
// }

export const getCategory = (query) => {
    return query ? API.get(`/categories?cat=${query.cat}&targetGender=${query.targetGender}`) : API.get(`/categories`)
}

