/// <reference types="react-scripts" />

interface IProps {
    user?: {
        userId: string;
        username: string;
        profilePicture: string;
    };
    image?: string;
    size?: number;
    mr?: number;
    first?: boolean;
}
