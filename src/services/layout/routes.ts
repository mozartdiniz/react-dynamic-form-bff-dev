import { Request, Response } from 'express';
import { getFormLayout } from './LayoutController';
import { checkStyleParams } from '../../middleware/checks';

export default [{
    path: '/api/v1/formLayout',
    method: 'get',
    handler: [
        checkStyleParams,
        async ({ query }: Request, res: Response) => {
            return getFormLayout(
                (data: any) => res.status(200).send(data),
                query.v
            )
        }
    ]
}]
