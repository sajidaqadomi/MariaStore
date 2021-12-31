import * as api from '../api/products'
import { END_LOADING_PROD, FETCH_PRODUCT, FETCH_PRODUCT_BY_ID, START_LOADING_PROD } from "../utility/actionTypes"

export const getProducts = (catId) => async (dispatch) => {
    // console.log(catId, 'catID')

    try {
        dispatch({ type: START_LOADING_PROD })

        const { data } = await api.getProducts(catId)
        console.log(data, 'dataproducts')
        dispatch({ type: FETCH_PRODUCT, payload: data })

        dispatch({ type: END_LOADING_PROD })
    } catch (error) {
        console.log(error)
        dispatch({ type: END_LOADING_PROD })

    }
}

export const getProductsById = (id) => async (dispatch) => {
    console.log('getproductByIdaction')
    try {
        dispatch({ type: START_LOADING_PROD })

        const { data } = await api.getProductById(id)
        dispatch({ type: FETCH_PRODUCT_BY_ID, payload: data })

        dispatch({ type: END_LOADING_PROD })
    } catch (error) {
        console.log(error)
        dispatch({ type: END_LOADING_PROD })

    }
}