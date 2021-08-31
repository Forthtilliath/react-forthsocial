export interface ILikePost {
    userId: string,
    postId: string
}

class LikePost {
    // Base de données
    static _table: string = 'likepost';

    private _userId: string;
    private _postId: string;

    constructor(aLikePost: ILikePost) {
        this._userId = aLikePost.userId;
        this._postId = aLikePost.postId;

        return this;
    }
}

export default LikePost;