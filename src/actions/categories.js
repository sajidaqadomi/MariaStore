import * as api from "../api/categories";
import {
    DATA_ERROR,
    END_LOADING_CAT,
    FETCH_CATEGORY,
    START_LOADING_CAT,
} from "../utility/actionTypes";

export const getCategories = (query) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING_CAT });

        const response = await api.getCategory(query);
        const { data } = response

        if (data) dispatch({ type: FETCH_CATEGORY, payload: data });//may be return undifined in case of reeor
        dispatch({ type: END_LOADING_CAT });

        if (response.error) throw response.error
    } catch (error) {
        // console.log(error, 'error in categories');
        dispatch({ type: DATA_ERROR, payload: { error, errorTitle: "Loading Categories in error !", type: "categories" } })

    }
};
