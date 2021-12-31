import * as Api from '../api/cart'
import { ADD_PRODUCT_TO_CART, GET_CART_BY_USERID, UPDATE_ORDER_ITEM_Q } from '../utility/actionTypes'

export const getCartByUserId = (id) => async (dispatch) => {
    try {
        const { data } = await Api.getCartsByUserId(id)
        console.log(data, 'data')
        dispatch({ type: GET_CART_BY_USERID, payload: data })

    } catch (error) {
        console.log(error)
    }
}

export const addToCart = (id, product) => async (dispatch) => {
    try {
        const { data } = await Api.addToCart(id, product)
        console.log(data.orderItem, "orderItem")
        dispatch({ type: ADD_PRODUCT_TO_CART, payload: data.orderItem })

    } catch (error) {
        console.log(error)
    }
}

export const updateOrderItemQ = (id, order) => async (dispatch) => {
    try {
        const { data } = await Api.updateOrderItemById(id, order)
        console.log(data, "orderItem")
        dispatch({ type: UPDATE_ORDER_ITEM_Q, payload: data })

    } catch (error) {
        console.log(error)
    }
}
