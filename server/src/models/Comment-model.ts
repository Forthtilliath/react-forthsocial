export interface IComment {
    id: string,
    message: string,
    userId: string,
    postId: string
}

class Comment {
    // Base de données
    static _table: string = 'comment';

    private _id: string;
    private _message: string;
    private _userId: string;
    private _postId: string;

    constructor(aLikePost: IComment) {
        this._id = aLikePost.id;
        this._message = aLikePost.message;
        this._userId = aLikePost.userId;
        this._postId = aLikePost.postId;

        return this;
    }
}

export default Comment;