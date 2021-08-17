import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const auth = async (req: Request, _res: Response, next: NextFunction) => {
    const token = req.headers?.authorization?.split(' ')[1];
    console.log('token',req.headers);
    const isCustomAuth = token && token.length < 500;

    let decodedData: { id?: string; sub?: string };

    if (token && isCustomAuth) {
        decodedData = jwt.verify(token, process.env.SECRET_TOKEN as string) as unknown as { id: string };
        console.log('if',decodedData);

        // req.userId = decodedData?.id;
    } else if (token) {
        decodedData = jwt.decode(token) as { sub: string };
        console.log('else',decodedData);

        // req.userId = decodedData?.sub;
    }

    next();
};

export default auth;
