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
    email?: string;
    profilePicture: string;
    coverPicture?: string;
    description?: string;
    firstname?: string;
    lastname?: string;
    currentCity?: string;
    fromCity?: string;
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
    name: InputProp;
    type: string;
    userForm: IUser;
    toggleEditForm: (propName: InputProp, value?: boolean | undefined) => void;
    update: (propName: InputProp) => void;
    onChange: ({ target: { name, value } }: { target: { name: string; value: string } }) => void;
};

type BoxInput = Input & {
    // isEditing: boolean
    edit: boolean;
    label: string;
};

type TextProfil = {
    userForm: IUser;
    name: InputProp;
    // label: string
};

// prettier-ignore
type InputProp = 'username' | 'email' | 'firstname' | 'lastname' | 'currentCity' | 'fromCity' | 'description' | 'profilePicture' | 'coverPicture';
type EditForm = {
    username: boolean;
    email: boolean;
    firstname: boolean;
    lastname: boolean;
    profilePicture: boolean;
    coverPicture: boolean;
    currentCity: boolean;
    fromCity: boolean;
    description: boolean;
};
