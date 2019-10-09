import { Request, Response } from 'express';
import { getTranslation } from './TranslationController';
import { checkTranslationParams } from '../../middleware/checks';
import { ITranslation } from '../../interfaces/ITranslation';

export default [{
    path: '/api/v1/translation',
    method: 'get',
    handler: [
        checkTranslationParams,
        async ({ query }: Request, res: Response) => {
            return getTranslation(
                (data: ITranslation) => res.status(200).send(data),
                query.language
            )
        }
    ]
}]
