import { API } from "./api"
import * as storage from '../utility/cache'

API.interceptors.request.use((req) => {
    //if (authStorage.getToken()) {
    req.headers.Authorization = `Bearer ${storage.get('userToken')}`;
    //}

    return req;
});

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

export const updateOrderItemById = (id, order) => {
    return API.patch(`/carts/orderitem/${id}`, order, {
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IlFhZG9taVNhamlkYUphbWFsIiwiaWQiOiI2MWFmYmUxZWNlNWNjNWRkNDA0MTU1MzIiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NDA2OTQ0NTMsImV4cCI6MTY0MDc4MDg1M30.DuPyjuOQWvjpWD4cWj0wybS4a-tZYTXUyXGnWPoLYyg'
        }
    })
}