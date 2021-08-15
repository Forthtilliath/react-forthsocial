// import Connection from '../config/database';
import pool from '../config/database-promise';
import { v4 as uuidv4 } from 'uuid';

interface IUser {
    id?: string;
    username: string;
    email: string;
    password: string;
    profilePicture?: string;
    coverPicture?: string;
    isAdmin?: boolean;
    createAt?: number;
    updateAt?: number;
}

class User {
    // Base de données
    static _table: string = 'user';

    private _id?: string;
    private _username: string;
    private _email: string;
    private _password: string;

    constructor(aUser: IUser) {
        console.log(aUser);
        this._id = aUser.id;
        this._username = aUser.username;
        this._email = aUser.email;
        this._password = aUser.password;

        return this;
    }

    get username() {
        return this._username;
    }

    get email() {
        return this._email;
    }

    public async createUser() {
        this._id = uuidv4().replace(/-/g, '');

        let query =
            '   INSERT INTO `' +
            User._table +
            '` (`id`, `username`, `email`, `password`) \
                        VALUES ( ?, ?, ?, ?)';
        let datas = [this._id, this._username, this._email, this._password];

        return await pool.query(query, datas);
    }

    public getUser() {
        return {
            id: this._id,
            username: this._username,
            email: this._email,
        };
    }

    static async getUser(id: string) {
        let query =
            '   SELECT id, username, email, profilePicture, coverPicture, isAdmin, createdAt, updatedAt \
                FROM `' +
            User._table +
            '` \
        WHERE id = ?';
        let datas = [id];
        console.log('datas', datas);
        
        console.log(await pool.query(query, datas));

        return await pool.query(query, datas).then((res) => res[0]);
    }

    static async getUsers() {
        let query =
            '   SELECT id, username, email, profilePicture, coverPicture, isAdmin, createdAt, updatedAt \
                FROM `' +
            User._table +
            '`';

        return await pool.query(query).then((res) => res[0]);
    }
}

export default User;
