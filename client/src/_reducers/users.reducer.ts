import * as actionType from '../_constants/actionTypes';

const initialState = { profile: undefined };

const usersReducer = (state = initialState, action: { type: string; data: any; payload: any }) => {
    switch (action.type) {
        case actionType.GET_USER:
            return { ...state, profile: action.payload[0] };
        case actionType.NO_USER:
            return { ...state, profile: {} };
        default:
            return state;
    }
};

export default usersReducer;
