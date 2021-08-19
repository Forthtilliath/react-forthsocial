export interface IPost {
    id: number;
    photo: string;
    date: string;
    userId: string;
    like: number;
    comment: number;
    desc?: string;
}

export interface IUser {
    id: string;
    username: string;
    // email: string;
    // password: string;
    profilePicture: string;
    // coverPicture?: string;
    // isAdmin?: boolean;
    // createdAt?: number;
    // updatedAt?: number;
}

export interface IRegister {}

export interface ILogin {
    username: string;
    password: string;
}

export interface IPayloadLogin {
    userId: string;
    token: string;
}
