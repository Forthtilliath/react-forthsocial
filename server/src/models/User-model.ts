import pool from '../config/database-promise';
import { v4 as uuidv4 } from 'uuid';
import { argon2id, argon2Verify, IArgon2Options } from 'hash-wasm';
import crypto from 'crypto';
import { RowDataPacket } from 'mysql2/promise';

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

    // Encodage mot de passe
    static _cryptoSettings = {
        parallelism: 1, // p
        iterations: 8, // t
        memorySize: 1024 * 35, // m / in Kb
        hashLength: 32, // output size = 32 bytes
        outputType: 'encoded' as 'encoded', // return standard encoded string containing parameters needed to verify the key
    };

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

    get id() {
        return this._id;
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

    /**
     * Génère un id aléatoire de 32 caractères. Aucune vérification pour savoir si l'id généré
     * existe déjà ou pas, mais la probabilité d'avoir un doublon est énormement faible.
     * */
    // TODO Modifier en private plus tard
    static generateUuid(): string {
        return uuidv4().replace(/-/g, '');
    }

    /**
     * Encrypte le mot de passe d'une longueur de 64 caractères en utilisant Argon2.
     */
    private async encryptPassword(): Promise<string> {
        const settings: IArgon2Options = Object.assign(User._cryptoSettings, {
            password: this._password,
            salt: crypto.randomBytes(32),
        });

        return argon2id(settings);
    }

    /** Crée un nouveau compte */
    public async createUser() {
        this._id = User.generateUuid();
        this._password = await this.encryptPassword();

        const query = ` INSERT INTO ${User._table} (id, username, email, password)
                        VALUES ( ?, ?, ?, ?)`;
        const datas = [this._id, this._username, this._email, this._password];

        return await pool.query(query, datas);
    }

    /** Récupère les données d'un utilisateur */
    static async getUserById(id: string) {
        const query = ` SELECT id, username, email, profilePicture, coverPicture, isAdmin, createdAt, updatedAt
                        FROM ${User._table}
                        WHERE id = ?`;
        const datas = [id];

        return await pool.query<RowDataPacket[]>(query, datas).then((res) => res[0]);
    }

    /** Récupère un utilisateur pour vérifier les identifiants */
    public async isValidPassword(username: string, password: string): Promise<boolean> {
        const query = ` SELECT id, password
                        FROM ${User._table}
                        WHERE username = ?`;
        const datas = [username];

        const user = await pool.query<RowDataPacket[]>(query, datas).then((res) => res[0]);

        if (user.length === 1) {
            const isValid = await argon2Verify({
                password: password,
                hash: user[0].password,
            });

            if (isValid) {
                this._id = user[0].id;
                return true;
            }
        }

        return false;
    }

    /** Récupère l'ensemble des utilisateurs */
    static async getUsers(): Promise<RowDataPacket[]> {
        const query = ` SELECT id, username, email, profilePicture, coverPicture, isAdmin, createdAt, updatedAt
                        FROM ${User._table}`;

        return await pool.query<RowDataPacket[]>(query).then((res) => res[0]);
        // return await pool.query(query).then((res) => res[0]);
    }

    /** Vérifie si le username est disponible */
    public async isAvailableUsername(): Promise<boolean> {
        const query = ` SELECT username
                        FROM ${User._table}
                        WHERE username = ?`;
        const datas = [this._username];

        let rows = await pool.query<RowDataPacket[]>(query, datas).then((res) => res[0]);

        return rows.length === 0;
    }

    /** Vérifie si l'email est disponible */
    public async isAvailableEmail(): Promise<boolean> {
        const query = ` SELECT email
                        FROM ${User._table}
                        WHERE email = ?`;
        const datas = [this._email];

        let rows = await pool.query<RowDataPacket[]>(query, datas).then((res) => res[0]);

        return rows.length === 0;
    }

    /** Modifie un utilisateur */
    public async setUser() {
        this._updatedAt = Date.now();

        const query = ` UPDATE ${User._table}
                        SET profilePicture = ?,
                            coverPicture = ?
                        WHERE id = ?`;
        const datas = [this._profilePicture, this._coverPicture, this._id];

        return await pool.query<RowDataPacket[]>(query, datas);
    }

    /** Supprime un utilisateur */
    static async deleteUser(id: string) {
        const query = ` DELETE FROM ${User._table}
                        WHERE id = ?`;
        const datas = [id];

        return await pool.query<RowDataPacket[]>(query, datas).then((res) => res[0]);
    }
}

export default User;
