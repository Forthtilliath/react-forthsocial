import Connection from '../config/database'

interface IUser {
    username: string;
    email: string;
    password: string;
}

class User {
    private _username: string;
    private _email: string;
    private _password: string;
    // Base de données
    private _table: string;
    
    constructor(aUser: IUser) {
        this._username = aUser.username;
        this._email    = aUser.email;
        this._password = aUser.password;

        this._table = 'user';

        return this;
    }

    get username() {
        return this._username;
    }

    get email() {
        return this._email;
    }

    public createUser() {
        Connection.query('INSERT INTO')
    }
}

export default User;
