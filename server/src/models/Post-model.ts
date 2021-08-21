import pool from '../config/database-promise';
import { v4 as uuidv4 } from 'uuid';
import { RowDataPacket } from 'mysql2/promise';

export interface IPost {
    id?: string;
    description: string;
    image: string;
    userId: string;
    createdAt?: number;
    updatedAt?: number;
}

class Post {
    // Base de données
    static _table: string = 'post';

    private _id?: string;
    private _description: string;
    private _image: string;
    private _userId: string;
    private _createdAt?: number;
    private _updatedAt?: number;

    constructor(aPost: IPost) {
        this._id = aPost.id;
        this._description = aPost.description;
        this._image = aPost.image;
        this._userId = aPost.userId;
        this._createdAt = aPost.createdAt;
        this._updatedAt = aPost.updatedAt;

        return this;
    }

    /**
     * Génère un id aléatoire de 32 caractères. Aucune vérification pour savoir si l'id généré
     * existe déjà ou pas, mais la probabilité d'avoir un doublon est énormement faible.
     * */
    // TODO Modifier en private plus tard
    static generateUuid(): string {
        return uuidv4().replace(/-/g, '');
    }

    /** Récupère l'ensemble des posts */
    static async getPosts(): Promise<RowDataPacket[]> {
        const query = ` SELECT *
                        FROM ${Post._table}`;

        return await pool.query<RowDataPacket[]>(query).then((res) => res[0]);
    }
}

export default Post;