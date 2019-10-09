import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

export const getTranslationPerLanguage = (callback: any, language: string) => {
    fs.readFile(`./src/fakeData/translations/${ language }.json`, function (err, data) {
        if (err) {
            return console.error(err);
        }

        callback(JSON.parse(data.toString()));
    });
}
