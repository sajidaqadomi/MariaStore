import * as api from "../api/categories";
import {
    END_LOADING_CAT,
    FETCH_CATEGORY,
    START_LOADING_CAT,
} from "../utility/actionTypes";

export const getCategories = (query) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING_CAT });

        const { data } = await api.getCategory(query);
        dispatch({ type: FETCH_CATEGORY, payload: data });

        dispatch({ type: END_LOADING_CAT });
    } catch (error) {
        console.log(error);
        dispatch({ type: END_LOADING_CAT });
    }
};
