import { JwtPayload } from 'jsonwebtoken';

declare const require: any;

declare namespace Express {
    export interface Request {
        userId?: string | JwtPayload;
    }
}