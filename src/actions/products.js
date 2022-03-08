import * as api from "../api/products";
import {
    DATA_ERROR,
    END_LOADING_PROD,
    FETCH_PRODUCT,
    FETCH_PRODUCT_BY_ID,
    START_LOADING_PROD,
} from "../utility/actionTypes";

export const getProducts = (target, catId) => async (dispatch) => {
    // console.log('getProducts', target, catId, "target, catId")
    try {
        dispatch({ type: START_LOADING_PROD });

        const response = await api.getProducts(target, catId);
        const { data } = response
        //  console.log(data, 'data')
        if (data) dispatch({ type: FETCH_PRODUCT, payload: data });
        dispatch({ type: END_LOADING_PROD });
        if (response.error) throw response.error
    } catch (error) {

        dispatch({ type: END_LOADING_PROD });
        dispatch({ type: DATA_ERROR, payload: { error: error, errorTitle: ` Loading Products ${catId && ('for specific category')} in error`, type: "productsList" } })


    }
};

export const getProductsBySearch = (value) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING_PROD });

        const response = await api.getProductsBySearch(value);
        const { data } = response
        // console.log(data, 'bysaerch')
        if (data) dispatch({ type: FETCH_PRODUCT, payload: data });
        dispatch({ type: END_LOADING_PROD });

        if (response.error) throw response.error

    } catch (error) {

        dispatch({ type: END_LOADING_PROD });
        dispatch({ type: DATA_ERROR, payload: { error: error, errorTitle: "Search Products in error", type: "productsList" } })



    }
};

export const getProductsById = (id) => async (dispatch) => {
    // console.log("**************", id, "******************")
    try {
        dispatch({ type: START_LOADING_PROD });
        //  console.log("**************", id, "******************")

        const response = await api.getProductById(id);
        //  console.log(response, 'prid')
        const { data } = response

        if (data) dispatch({ type: FETCH_PRODUCT_BY_ID, payload: data });
        dispatch({ type: END_LOADING_PROD });

        if (response.error) throw response.error


    } catch (error) {
        //console.log(error, 'error')
        dispatch({ type: DATA_ERROR, payload: { error: error, errorTitle: "Loading Product in error", type: 'product' } })

    }
};
