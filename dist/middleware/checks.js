"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const httpErrors_1 = require("../utils/httpErrors");
exports.checkSearchParams = (req, res, next) => {
    if (!req.query.q) {
        throw new httpErrors_1.HTTP400Error('Missing q parameter');
    }
    else {
        next();
    }
};
exports.checkStyleParams = (req, res, next) => {
    if (!req.query.v) {
        throw new httpErrors_1.HTTP400Error("Missing venture parameter");
    }
    else {
        next();
    }
};
exports.checkTranslationParams = (req, res, next) => {
    if (!req.query.language) {
        throw new httpErrors_1.HTTP400Error('Missing language parameter');
    }
    else {
        next();
    }
};
exports.checkUsernameParams = (req, res, next) => {
    if (!req.query.userName) {
        throw new httpErrors_1.HTTP400Error('Missing userName parameter');
    }
    else {
        next();
    }
};
//# sourceMappingURL=checks.js.map