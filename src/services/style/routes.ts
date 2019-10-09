import { Request, Response } from 'express';
import { getStyle } from './StyleController';
import { checkStyleParams } from '../../middleware/checks';
import { IStyle } from '../../interfaces/IStyle';

export default [{
    path: '/api/v1/style',
    method: 'get',
    handler: [
        checkStyleParams,
        async ({ query }: Request, res: Response) => {
            return getStyle(
                (data: IStyle) => res.status(200).send(data),
                query.v
            )
        }
    ]
}]
