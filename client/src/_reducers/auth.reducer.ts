import * as actionType from '../_constants/actionTypes';
// import { COOKIE_NAME } from '../_constants/app.const';

// TODO : https://levelup.gitconnected.com/react-redux-hooks-useselector-and-usedispatch-f7d8c7f75cdd
const authReducer = (state = { authData: null }, action: { type: string; data: any; payload: any }) => {
    switch (action.type) {
        case actionType.REGISTER:
            return { ...state, authData: action.payload };
        case actionType.AUTH:
            // localStorage.setItem(COOKIE_NAME, JSON.stringify(action.payload));

            return { ...state, authData: action.payload };
        case actionType.LOGOUT:
            // localStorage.clear();

            return { ...state, authData: null };
        default:
            return state;
    }
};

export default authReducer;