import * as Api from "../api/cart";
import {
    ADD_PRODUCT_TO_CART,
    DATA_ERROR,
    EMPTY_CART,
    END_LOADING_CART,
    GET_CART_BY_USERID,
    REMOVE_PRODUCT_FROM_CART,
    START_LOADING_CART,
    UPDATE_ORDER_ITEM_Q,
} from "../utility/actionTypes";

export const getCartByUserId = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING_CART })
        const response = await Api.getCartsByUserId(id);
        dispatch({ type: END_LOADING_CART })

        const { data } = response
        if (data) dispatch({ type: GET_CART_BY_USERID, payload: data });

        if (response.error) throw response.error

    } catch (error) {
        dispatch({ type: END_LOADING_CART })
        dispatch({ type: DATA_ERROR, payload: { error: error, errorTitle: ` Loading Your cart  in error`, type: "cart" } })

    }
};

export const addToCart = (id, product) => async (dispatch) => {
    try {
        const { data } = await Api.addToCart(id, product);
        dispatch({ type: ADD_PRODUCT_TO_CART, payload: data.orderItem });
    } catch (error) {
        console.log(error);
    }
};

export const updateOrderItemQ = (id, order) => async (dispatch) => {
    try {
        const { data } = await Api.updateOrderItemById(id, order);
        dispatch({ type: UPDATE_ORDER_ITEM_Q, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const removeOrderItem = (id) => async (dispatch) => {
    try {
        const { data } = await Api.deleteOrderItemById(id)
        console.log(data, 'data')
        dispatch({ type: REMOVE_PRODUCT_FROM_CART, payload: data });
    } catch (error) {
        console.log(error);
    }
};


export const emptyCartByUserId = (userId) => async (dispatch) => {
    try {
        // dispatch({ type: START_LOADING_CART })
        const response = await Api.emptyCart(userId)
        // dispatch({ type: END_LOADING_CART })

        const { data } = response
        if (data) dispatch({ type: EMPTY_CART, payload: data });

        if (response.error) throw response.error

    } catch (error) {
        //  dispatch({ type: END_LOADING_CART })
        dispatch({ type: DATA_ERROR, payload: { error: error, errorTitle: ` Clear Your cart  in error`, type: "cart" } })

    }
};
