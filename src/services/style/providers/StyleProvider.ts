import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

export const getStylePerVenture = (callback: any, venture: string) => {
    fs.readFile(`./src/fakeData/styles/${ venture }.json`, function (err, data) {
        if (err) {
            return console.error(err);
        }

        callback(JSON.parse(data.toString()));
    });
}
