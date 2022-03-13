import {
    END_LOADING_PROD,
    FETCH_PRODUCT,
    FETCH_PRODUCT_BY_ID,
    LIKE_PRODUCT,
    START_LOADING_PROD,
} from "../utility/actionTypes";

export const products = (
    state = { isLoading: true, products: null, product: {} },
    action
) => {
    switch (action.type) {
        case START_LOADING_PROD:
            return { ...state, isLoading: true, products: null, product: {} };

        case END_LOADING_PROD:
            return { ...state, isLoading: false };

        case FETCH_PRODUCT:
            return { ...state, products: action.payload };

        case FETCH_PRODUCT_BY_ID:
            return { ...state, product: action.payload };

        case LIKE_PRODUCT:
            const { data, likeQuery } = action.payload;
            return likeQuery
                ? { ...state, products: state.products.filter(item => item._id !== data._id) } : {
                    ...state,
                    products: state.products.map((item) =>
                        item._id === data._id ? data : item
                    ),
                }
                ;

        default:
            return state;
    }
};
