/// <reference types="react-scripts" />

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