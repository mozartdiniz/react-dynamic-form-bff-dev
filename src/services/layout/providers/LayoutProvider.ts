import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

export const getLayout = (callback: any, venture: string) => {
    fs.readFile(`./src/fakeData/layouts/${ venture }.json`, function (err, data) {
        if (err) {
            return console.error(err);
        }

        callback(JSON.parse(data.toString()));
    });
}
