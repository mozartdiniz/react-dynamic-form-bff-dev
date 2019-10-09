"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const StyleController_1 = require("./StyleController");
const checks_1 = require("../../middleware/checks");
exports.default = [{
        path: '/api/v1/style',
        method: 'get',
        handler: [
            checks_1.checkStyleParams,
            ({ query }, res) => __awaiter(this, void 0, void 0, function* () {
                return StyleController_1.getStyle((data) => res.status(200).send(data), query.v);
            })
        ]
    }];
//# sourceMappingURL=routes.js.map