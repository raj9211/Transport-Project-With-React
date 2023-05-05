import { ActionTypes } from "../constants/action-types";

const initialState = {
    user: null,
    token: null,
};

export const tokenReducer = (state = null, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_TOKEN:
            return payload;
        case ActionTypes.GET_TOKEN:
            return payload;
        case ActionTypes.REMOVE_TOKEN:
            return null;
        default:
            return state;
    }
};
