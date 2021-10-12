import axios, { AxiosResponse } from 'axios';

const API = axios.create();
API.interceptors.response.use((res: AxiosResponse<any>) => res, function (error) {
    // Si l'utilisateur n'a pas les droits pour accéder à la page, on le redirige vers la page de connexion
    if (error.response.status === 401 ) {
        window.location.href = '/login';
    } else {
        return Promise.reject(error);
    }
})

// API.interceptors.request.use((req) => {
//     if (localStorage.getItem(COOKIE_NAME) !== null) {
//         req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem(COOKIE_NAME) as string).token}`;
//     }

//     return req;
// });

export const fetchPost     = (id:string)                => API.get(`/posts/${id}`);
export const fetchPosts    = (id:string)                => API.get(`/posts/timeline/${id}`);
export const fetchPostsAll = ()                         => API.get(`/posts/timeline`);
// export const fetchPostsBySearch = (searchQuery)     =>
    // API.get(`/posts/search?${searchQuery.search && `searchQuery=${searchQuery.search}&`}tags=${searchQuery.tags}`);
export const createPost         = (newPost:IPost)         => API.post('/posts', newPost);
export const updatePost         = (id:string, updatedPost:IPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost         = (id:IPost)              => API.delete(`/posts/${id}`);
export const likePost           = (id:IPost)              => API.patch(`/posts/${id}/likePost`);
export const commentPost        = (value:string, id:IPost)       => API.post(`/posts/${id}/commentPost`, { value });

export const register = (formData:IRegister)        => API.post('/user/register', formData);
export const getUser = (id: string) => API.get(`/user/${id}`);

// Auth
export const login  = (formData: ILogin)    => API.post('/auth/login', formData);
export const logout = ()                    => API.get('/auth/logout');
export const getJwt = ()                    => API.get(`/auth/jwt`);
