import { ActionTypes } from "../constants/action-types";


const initialState = {
    user: null,
    token: null,
};

export const userReducer = (state = null, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_USER:
            return { ...state, ...payload };
        case ActionTypes.GET_USER:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_USER:
            return null;
        default:
            return state;
    }
};



// export const userReducer = (state = initialState, { type, payload }) => {
//     switch (type) {
//         case ActionTypes.SET_USER:
//             return state
//         default:
//             return state
//     }
// }