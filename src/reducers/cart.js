import {
    ADD_PRODUCT_TO_CART,
    GET_CART_BY_USERID,
    UPDATE_ORDER_ITEM_Q,
} from "../utility/actionTypes";
import { products } from "./product";

export const cart = (
    state = { products: [], quantity: 0, total: 0 },
    action
) => {
    switch (action.type) {
        case GET_CART_BY_USERID:
            return {
                ...action.payload,
                products: action.payload.products.map((orderItem) => ({
                    ...orderItem,
                    total: orderItem.quantity * orderItem.product.price,
                })),
                total: action.payload.products.reduce((prev, currOrder) => {
                    // console.log(currOrder, prev, "currentOrder rducer");
                    return prev + currOrder.quantity * currOrder.product.price;
                }, 0),
            };
        case ADD_PRODUCT_TO_CART:
            const proTotal = action.payload.quantity * action.payload.product.price;
            return {
                products: [...state.products, { ...action.payload, total: proTotal }],
                quantity: state.quantity + 1,
                total: state.total + proTotal,
            };

        case UPDATE_ORDER_ITEM_Q:
            const newQuantity = action.payload.quantity;
            const oldTotal = state.total;
            return {
                ...state,
                products: state.products.map((orderItem) =>
                    orderItem.id !== action.payload.id
                        ? orderItem
                        : {
                            ...orderItem,
                            quantity: newQuantity,
                            total: orderItem.product.price * newQuantity,
                        }
                ),
                total: state.products
                    .map((orderItem) =>
                        orderItem.id !== action.payload.id
                            ? orderItem.total
                            : orderItem.product.price * newQuantity
                    )
                    .reduce((prev, curr) => prev + curr, 0),
            };

        default:
            return state;
    }
};
