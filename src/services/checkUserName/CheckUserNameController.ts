import { checkUserNameOldServer } from './providers/CheckUserNameOldServerProvider';

export const checkUserName = (callback: any, language: string) => {
    checkUserNameOldServer(callback, language);
}
