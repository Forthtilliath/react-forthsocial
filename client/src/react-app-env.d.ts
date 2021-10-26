/// <reference types="react-scripts" />

declare module 'react-loadingg';

/************************
 * Register + Login
 */
interface ILogin {
    username: string;
    password: string;
}

interface IRegister extends ILogin {
    email: string;
    passwordConfirm: string;
}

/*********************************
 * Actions
 */
// interface IPayloadLogin {
//     userId: string;
//     token: string;
// }
interface IActionAuth {
    type: string;
    payload: {
        userId: string;
        token: string;
    };
}
interface IActionUser {
    type: string;
    payload?: {
        profile?: IUser;
    };
}

interface IUser {
    // userId: string;
    id: string;
    username: string;
    profilePicture: string;
    coverPicture?: string;
    description?: string;
}

interface IConnexionContext {
    loggedIn: boolean | undefined;
    user?: IUser;
}
interface IProps {
    user?: IUser;
    image?: string;
    size?: number;
    mr?: number;
    first?: boolean;
}

// interface IFeed {
//     userId?: string;
// }
// interface IProfile {
//     userId?: string;
// }

/*************************************
 * Posts
 */
interface IPost {
    id: number;
    description: string;
    image: string;
    date: string;
    userId: string;
    like: number;
    comment?: number;
    createdAt?: number;
    updatedAt?: number;
    // user
    username?: string;
    profilePicture?: string;
    nbComments: number;
    nbLikes: number;
}

/********************************************
 * Profil
 */
interface ProfileState {
    users: { profile: IUser };
}
interface UsersState {
    users: { profile: IUser | {} };
}


/********************************************
 * Elements
 */
/** Input (edit profil) */ 

type Input = {
    content: string;
    type: string;
    onCancel: () => void;
    onConfirm: () => void;
    onChange: ({ target: { name, value } }: { target: { name: string; value: string } }) => void;
    formValues: any;
}

type BoxInput  = Input & {
    isEditing: boolean
}