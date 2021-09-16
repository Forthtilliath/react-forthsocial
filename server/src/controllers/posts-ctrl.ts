import { Request, Response } from 'express';
import Post, { IPost } from '../models/Post-model';
const publicIp = require('public-ip');

export const getPosts = async (_req: Request, res: Response) => {

// (async () => {
	console.log(await publicIp.v4());
// 	//=> '46.5.21.123'

// 	console.log(await publicIp.v6());
// 	//=> 'fe80::200:f8ff:fe21:67cf'
// })();

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