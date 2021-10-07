import axios from 'axios';
import { ReactNode, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { LOGOUT } from '../../_constants/actionTypes';
import AuthContext from '../AppContext/Auth.context';

interface ILogout {
    children: ReactNode;
}

const Logout = ({ children }: ILogout) => {
    const { getConnexion } = useContext(AuthContext);
    const history = useHistory();
    const dispatch = useDispatch();

    const disconnect = () => {
        axios.get('/auth/logout').then(() => {
            dispatch({ type: LOGOUT });
            getConnexion();
            history.push('/');
        });
    };

    return <div onClick={disconnect}>{children}</div>;
};

export default Logout;
