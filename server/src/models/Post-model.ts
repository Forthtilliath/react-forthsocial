import pool from '../config/database-promise';
import { v4 as uuidv4 } from 'uuid';
import { RowDataPacket } from 'mysql2/promise';
import User from './User-model';

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
    private generateUuid(): string {
        return uuidv4().replace(/-/g, '');
    }

    /** Récupère l'ensemble des posts */
    static async getPosts(): Promise<RowDataPacket[]> {
        const query = ` SELECT p.*, u.username, u.profilePicture, COUNT(c.postId) AS nbComments, COUNT(lp.postId) AS nbLikes
                        FROM ${Post._table} p
                            INNER JOIN ${User._table} u ON u.id = p.userId
                            LEFT JOIN comment c ON p.id = c.postId
                            LEFT JOIN likepost lp ON p.id = lp.postId
                        GROUP BY p.id`;

        return await pool.query<RowDataPacket[]>(query).then((res) => res[0]);
    }

    /** Récupère l'ensemble des posts d'un utilisateur à partir de son username */
    static async getPostsUser(username: string): Promise<RowDataPacket[]> {
        const query = ` SELECT p.*, u.username, u.profilePicture, COUNT(c.postId) AS nbComments, COUNT(lp.postId) AS nbLikes
                        FROM ${Post._table} p
                            INNER JOIN ${User._table} u ON u.id = p.userId
                            LEFT JOIN comment c ON p.id = c.postId
                            LEFT JOIN likepost lp ON p.id = lp.postId
                        WHERE u.username = ?
                        GROUP BY p.id`;
        const datas = [username];

        return await pool.query<RowDataPacket[]>(query, datas).then((res) => res[0]);
    }
}

export default Post;
