import { ILogin, IPayloadLogin } from '../interfaces';
import * as api from '../api';
import { AUTH } from '../constants/actionTypes';

export const signin =
    (formData: ILogin) => async (dispatch: (arg0: { type: string; payload: IPayloadLogin }) => void) => {
        api.login(formData)
            .then(({ data }) => dispatch({ type: AUTH, payload: data }))
            .catch((err) => console.log(err));
    };
