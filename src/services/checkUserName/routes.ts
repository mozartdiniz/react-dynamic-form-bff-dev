import { Request, Response } from 'express';
import { checkUserName } from './CheckUserNameController';
import { checkUsernameParams } from '../../middleware/checks';
import { ITranslation } from '../../interfaces/ITranslation';

export default [{
    path: '/api/v1/checkUsername',
    method: 'get',
    handler: [
        checkUsernameParams,
        async ({ query }: Request, res: Response) => {
            return checkUserName(
                (data: ITranslation) => res.status(200).send(data),
                query.userName
            )
        }
    ]
}]
