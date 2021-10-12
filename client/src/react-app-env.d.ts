/// <reference types="react-scripts" />

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
interface IAction {
    type: string;
    payload: {
        userId: string;
        token: string;
    };
}

interface IUser {
    // userId: string;
    id: string;
    username: string;
    profilePicture: string;
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
