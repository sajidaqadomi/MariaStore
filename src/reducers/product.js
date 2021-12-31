import { END_LOADING_PROD, FETCH_PRODUCT, FETCH_PRODUCT_BY_ID, START_LOADING_PROD } from "../utility/actionTypes";

export const products = (state = { isLoading: true, products: [], product: {} }, action) => {
    switch (action.type) {
        case START_LOADING_PROD:
            return { ...state, isLoading: true }

        case END_LOADING_PROD:
            return { ...state, isLoading: false }

        case FETCH_PRODUCT:
            return { ...state, products: action.payload }

        case FETCH_PRODUCT_BY_ID:
            return { ...state, product: action.payload }

        default:
            return state;
    }

}