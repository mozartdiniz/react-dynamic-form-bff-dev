import { getStylePerVenture } from './providers/StyleProvider';

export const getStyle = (callback: any, venture: string) => {
    getStylePerVenture(callback, venture);
}
 