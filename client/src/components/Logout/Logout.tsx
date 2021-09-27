import axios from 'axios';
import { ReactNode, useContext } from 'react';
import { useHistory } from 'react-router';
import AuthContext from '../AppContext/Auth.context';

interface ILogout {
    children: ReactNode;
}

const Logout = ({ children }: ILogout) => {
    const { getConnexion } = useContext(AuthContext);
    const history = useHistory();

    const disconnect = () => {
        axios
            .get('/auth/logout')
            .then(() => getConnexion())
            .then(() => history.push('/'));
    };

    return <div onClick={disconnect}>{children}</div>;
};

export default Logout;
