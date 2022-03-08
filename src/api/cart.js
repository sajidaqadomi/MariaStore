import { API } from "./api"


export const getCarts = () => {
    return (API.get(`/carts`))
}

export const getCartsByUserId = (userId) => {
    return (API.get(`/carts/${userId}`))
}

export const createCart = (userId) => {
    return API.post(`/carts`, { userId })
}

export const addToCart = (id, product) => {
    return API.patch(`/carts/add/${id}`, product)
}

export const emptyCart = (userId) => {
    return API.patch(`/carts/clear/${userId}`)
}

export const updateOrderItemById = (id, order) => {
    return API.patch(`/carts/orderitem/${id}`, order)
}

export const deleteOrderItemById = (id) => {
    return API.delete(`/carts/orderitem/${id}`)
}