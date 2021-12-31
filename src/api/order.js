import { API } from "./api"

export const postOrder = (order) => {
    return API.post(`/orders`, order)
}