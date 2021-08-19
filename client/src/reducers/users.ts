import * as actionType from '../constants/actionTypes';

const authReducer = (state = { authData: null, loading: false, errors: null }, action: { type: string; data: any; }) => {
    console.log('reducer');
    switch (action.type) {
        case actionType.AUTH:
            console.log('AUTH');
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));

            return { ...state, authData: action.data, loading: false, errors: null };
        case actionType.LOGOUT:
            localStorage.clear();

            return { ...state, authData: null, loading: false, errors: null };
        default:
            console.log('DEF');
            return state;
    }
};

export default authReducer;
