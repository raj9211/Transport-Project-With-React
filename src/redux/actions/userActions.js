import { ActionTypes } from "../constants/action-types";

export const setUser = (user) => {
    return {
        type: ActionTypes.SET_USER,
        payload: user,
    };
};


export const selectedUser = (user) => {
    return {
        type: ActionTypes.GET_USER,
        payload: user
    };
};
