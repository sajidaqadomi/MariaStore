import {
    DATA_ERROR,
    DATA_ERROR_RESET,
    END_LOADING_DATA,
    START_LOADING_DATA,
} from "../utility/actionTypes";

export const dataStatus = (
    state = { isLoading: true, errors: [] },
    action
) => {
    switch (action.type) {
        case START_LOADING_DATA:
            return { ...state, isLoading: true };

        case END_LOADING_DATA:
            return { ...state, isLoading: false };

        case DATA_ERROR:
            // console.log(action.payload, "action.payload")
            let { error, errorTitle, type } = action.payload
            return { ...state, errors: [...state.errors, { error, errorTitle, type }] };

        case DATA_ERROR_RESET:
            return { ...state, errors: [] };

        default:
            return state;
    }
};
