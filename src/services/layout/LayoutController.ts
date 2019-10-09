import { getLayout } from './providers/LayoutProvider';

export const getFormLayout = (callback: any, venture: string) => {
    getLayout(callback, venture);
}
