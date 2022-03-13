import * as api from "../api/products";
import {
    DATA_ERROR,
    END_LOADING_PROD,
    FETCH_PRODUCT,
    FETCH_PRODUCT_BY_ID,
    LIKE_PRODUCT,
    START_LOADING_PROD,
} from "../utility/actionTypes";

export const getProducts = (target, catId) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING_PROD });

        const response = await api.getProducts(target, catId);
        const { data } = response;

        if (data) dispatch({ type: FETCH_PRODUCT, payload: data });
        dispatch({ type: END_LOADING_PROD });

        if (response.error) throw response.error;
    } catch (error) {
        dispatch({ type: END_LOADING_PROD });
        dispatch({
            type: DATA_ERROR,
            payload: {
                error: error,
                errorTitle: ` Loading Products ${catId && "for specific category"
                    } in error`,
                type: "productsList",
            },
        });
    }
};

export const getProductsBySearch = (value, likeId) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING_PROD });

        const response = likeId
            ? await api.getLikeProducts(likeId)
            : await api.getProductsBySearch(value);
        const { data } = response;

        if (data) dispatch({ type: FETCH_PRODUCT, payload: data });
        dispatch({ type: END_LOADING_PROD });

        if (response.error) throw response.error;
    } catch (error) {
        dispatch({ type: END_LOADING_PROD });
        dispatch({
            type: DATA_ERROR,
            payload: {
                error: error,
                errorTitle: " Products in error",
                type: "productsList",
            },
        });
    }
};

export const getProductsById = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING_PROD });
        const response = await api.getProductById(id);

        const { data } = response;

        if (data) dispatch({ type: FETCH_PRODUCT_BY_ID, payload: data });
        dispatch({ type: END_LOADING_PROD });

        if (response.error) throw response.error;
    } catch (error) {
        dispatch({
            type: DATA_ERROR,
            payload: {
                error: error,
                errorTitle: "Loading Product in error",
                type: "product",
            },
        });
    }
};

export const likeProductsById = (id, likeQuery) => async (dispatch) => {
    try {
        const response = await api.likeProduct(id);
        const { data } = response;

        if (data) dispatch({ type: LIKE_PRODUCT, payload: { data, likeQuery } });
        if (response.error) throw response.error;
    } catch (error) {
        console.log(error);
    }
};
