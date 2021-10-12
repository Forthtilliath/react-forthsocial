import * as api from '../_api';
import { AUTH, REGISTER } from '../_constants/actionTypes';
import { History } from 'history';

// Register
export const signon =
    (formData: IRegister, getConnexion: () => void, history: History<unknown>) =>
    async (dispatch: (arg0: IAction) => void) => {
        api.register(formData)
            .then(({ data }) => dispatch({ type: REGISTER, payload: data }))
            .then(async() => {
                await getConnexion();
                history.push('/profile');
            })
            .catch((err) => console.log(err));
    };

// Connexion
export const signin =
    (formData: ILogin, getConnexion: () => void, history: History<unknown>) =>
    async (dispatch: (arg0: IAction) => void) => {
        api.login(formData)
            .then(({ data }) => dispatch({ type: AUTH, payload: data }))
            .then(() => {
                getConnexion();
                history.push('/');
            })
            .catch((err) => console.log(err));
    };

export const signout = () => {
    // () => a
};
