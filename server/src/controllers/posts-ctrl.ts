import { Request, Response } from 'express';
import Post, { IPost } from '../models/Post-model';

export const getPosts = (_req: Request, res: Response) => {
    Post.getPosts()
        .then((results) => res.status(200).json(results))
        .catch((err) => res.status(404).json(err.sqlMessage));
};

export const createPost = (req: Request, res: Response) => {
    //
};

export const getPost = (req: Request, res: Response) => {
    //
};

export const editPost = (req: Request, res: Response) => {
    //
};

export const deletePost = (req: Request, res: Response) => {
    //
};

export const likePost = (req: Request, res: Response) => {
    //
};

export const unlikePost = (req: Request, res: Response) => {
    //
};