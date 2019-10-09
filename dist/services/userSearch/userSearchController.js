"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TranslationProvider_1 = require("./providers/TranslationProvider");
exports.checkUserName = (callback, language) => {
    TranslationProvider_1.getTranslationPerLanguage(callback, language);
};
//# sourceMappingURL=userSearchController.js.map