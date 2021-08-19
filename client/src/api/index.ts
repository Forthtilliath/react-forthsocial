import axios from 'axios';
import { SERVER_URL } from '../constants/server';
import { ILogin, IPost, IRegister } from '../interfaces';

// NOTE Attention quand on fera une requete axios avec proxy du package.json
const API = axios.create();
// const API = axios.create({ baseURL: SERVER_URL });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile') as string).token}`;
    }

    return req;
});

export const fetchPost  = (id:string)              => API.get(`/posts/${id}`);
export const fetchPosts = (id:string)            => API.get(`/posts/timeline/${id}`);
// export const fetchPosts         = (page)            => API.get(`/posts?page=${page}`);
// export const fetchPostsBySearch = (searchQuery)     =>
    // API.get(`/posts/search?${searchQuery.search && `searchQuery=${searchQuery.search}&`}tags=${searchQuery.tags}`);
export const createPost         = (newPost:IPost)         => API.post('/posts', newPost);
export const updatePost         = (id:string, updatedPost:IPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost         = (id:IPost)              => API.delete(`/posts/${id}`);
export const likePost           = (id:IPost)              => API.patch(`/posts/${id}/likePost`);
export const commentPost        = (value:string, id:IPost)       => API.post(`/posts/${id}/commentPost`, { value });

export const register           = (formData:IRegister)        => API.post('/user/register', formData);
export const login              = (formData:ILogin)        => API.post('/user/login', formData);
