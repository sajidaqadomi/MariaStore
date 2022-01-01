import {
    END_LOADING_CAT,
    FETCH_CATEGORY,
    START_LOADING_CAT,
} from "../utility/actionTypes";

export const categories = (
    state = { isLoading: true, categories: [] },
    action
) => {
    switch (action.type) {
        case START_LOADING_CAT:
            return { ...state, isLoading: true };

        case END_LOADING_CAT:
            return { ...state, isLoading: false };

        case FETCH_CATEGORY:
            return { ...state, categories: action.payload };

        default:
            return state;
    }
};
