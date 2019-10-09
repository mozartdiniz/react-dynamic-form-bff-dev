import { Request, Response, NextFunction } from 'express';
import { HTTP400Error } from '../utils/httpErrors';

export const checkSearchParams = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!req.query.q) {
        throw new HTTP400Error('Missing q parameter');
    } else {
        next();
    }
}

export const checkStyleParams = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if(!req.query.v){
        throw new HTTP400Error("Missing venture parameter")
    } else {
        next();
    }
}

export const checkTranslationParams = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!req.query.language) {
        throw new HTTP400Error('Missing language parameter');
    } else {
        next();
    }
}

export const checkUsernameParams = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!req.query.userName) {
        throw new HTTP400Error('Missing userName parameter');
    } else {
        next();
    }
}
