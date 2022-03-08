import {
    ADD_PRODUCT_TO_CART,
    EMPTY_CART,
    END_LOADING_CART,
    GET_CART_BY_USERID,
    REMOVE_PRODUCT_FROM_CART,
    START_LOADING_CART,
    UPDATE_ORDER_ITEM_Q,
} from "../utility/actionTypes";

export const cart = (
    state = { products: [], quantity: 0, total: 0, isLoading: true },
    action
) => {
    switch (action.type) {
        case START_LOADING_CART:
            return { ...state, isLoading: true }

        case END_LOADING_CART:
            return { ...state, isLoading: false }

        case GET_CART_BY_USERID:
            //  console.log(action.payload, "payload")
            return {
                ...action.payload,
                products: action.payload.products.map((orderItem) => ({
                    ...orderItem,
                    total: orderItem.quantity * orderItem.product.price,
                })),
                total: action.payload.products.reduce((prev, currOrder) => {
                    return prev + (currOrder.quantity * currOrder.product.price);
                }, 0),
            };
        case ADD_PRODUCT_TO_CART:
            const proTotal = action.payload.quantity * action.payload.product.price;
            return {
                ...state,
                products: [...state.products, { ...action.payload, total: proTotal }],
                quantity: state.quantity + 1,
                total: state.total + proTotal,
            };

        case REMOVE_PRODUCT_FROM_CART:
            const outProTotal = action.payload.quantity * action.payload.product.price;
            return {
                ...state,
                products: state.products.filter(item => item._id !== action.payload._id),
                quantity: state.quantity - 1,
                total: state.total - outProTotal,

            };
        case UPDATE_ORDER_ITEM_Q:
            const newQuantity = action.payload.quantity;
            //const oldTotal = state.total;
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

        case EMPTY_CART:
            return { ...state, products: [], quantity: 0, total: 0 }

        default:
            return state;
    }
};
