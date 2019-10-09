import { getTranslationPerLanguage } from './providers/TranslationProvider';

export const getTranslation = (callback: any, language: string) => {
    getTranslationPerLanguage(callback, language);
}
