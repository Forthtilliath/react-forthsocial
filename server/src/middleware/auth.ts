import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const auth = async (req: Request, _res: Response, next: NextFunction) => {
    const token = req.headers.authorization.split(' ')[1];
    const isCustomAuth = token.length < 500;

    let decodedData: string | jwt.JwtPayload;

    if (token && isCustomAuth) {
        decodedData = jwt.verify(token, process.env.SECRET_TOKEN);

        // req.userId = decodedData?.id;
    } else {
        decodedData = jwt.decode(token);

        // req.userId = decodedData?.sub;
    }

    next();
};

export default auth;
