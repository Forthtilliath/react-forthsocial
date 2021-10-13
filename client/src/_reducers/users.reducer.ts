import * as actionType from '../_constants/actionTypes';

const usersReducer = (state = { profile: null }, action: { type: string; data: any; payload: any }) => {
    switch (action.type) {
        case actionType.GET_USER:
            return { ...state, profile: action.payload };
        default:
            return state;
    }
};

export default usersReducer;
