// import Connection from '../config/database';
import pool from '../config/database-promise';
import { v4 as uuidv4 } from 'uuid';

export interface IUser {
    id?: string;
    username: string;
    email: string;
    password: string;
    profilePicture?: string;
    coverPicture?: string;
    isAdmin?: boolean;
    createdAt?: number;
    updatedAt?: number;
}

class User {
    // Base de données
    static _table: string = 'user';

    private _id?: string;
    private _username: string;
    private _email: string;
    private _password: string;
    private _profilePicture?: string;
    private _coverPicture?: string;
    private _isAdmin?: boolean;
    private _createdAt?: number;
    private _updatedAt?: number;

    constructor(aUser: IUser) {
        this._id = aUser.id;
        this._username = aUser.username;
        this._email = aUser.email;
        this._password = aUser.password;
        this._profilePicture = aUser.profilePicture;
        this._coverPicture = aUser.coverPicture;
        this._isAdmin = aUser.isAdmin;
        this._createdAt = aUser.createdAt;
        this._updatedAt = aUser.updatedAt;

        return this;
    }

    get username() {
        return this._username;
    }

    get email() {
        return this._email;
    }

    public getUser() {
        return {
            id: this._id,
            username: this._username,
            email: this._email,
            profilePicture: this._profilePicture,
            coverPicture: this._coverPicture,
            isAdmin: this._isAdmin,
            createdAt: this._createdAt,
            updatedAt: this._updatedAt,
        };
    }

    static generateUuid(): string {
        return uuidv4().replace(/-/g, '');
    }

    public async createUser() {
        this._id = User.generateUuid();

        let query = `   INSERT INTO ${User._table} (id, username, email, password)
                        VALUES ( ?, ?, ?, ?)`;
        let datas = [this._id, this._username, this._email, this._password];

        return await pool.query(query, datas);
    }

    static async getUser(id: string) {
        let query = `   SELECT id, username, email, profilePicture, coverPicture, isAdmin, createdAt, updatedAt
                        FROM ${User._table}
                        WHERE id = ?`;
        let datas = [id];

        return await pool.query(query, datas).then((res) => res[0]);
    }

    static async getUsers() {
        let query = `   SELECT id, username, email, profilePicture, coverPicture, isAdmin, createdAt, updatedAt
                        FROM ${User._table}`;

        return await pool.query(query).then((res) => res[0]);
    }
}

export default User;
