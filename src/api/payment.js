import { API } from "./api"

export const postPayment = (data) => {
    return API.post(`/checkout/payment`, data)
}