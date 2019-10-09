"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const node_fetch_1 = __importDefault(require("node-fetch"));
dotenv_1.default.config();
exports.checkUserNameOldServer = (callback, language) => {
    const data = {
        content: "<!-- ${message:username-checker-valid} -->"
    };
    console.log(1);
    node_fetch_1.default("https://www.jackpotjoy.ppc2.pgt01.gamesysgames.com/registerstepped.registerblockusername.username:updateusernamezone?_csrf=03275fd1-6ac7-4361-98bc-f28b5cac467f¶m=superthing235", {
        body: "t%3Azoneid=userNameCheckZone&t%3Aformid=registerForm&t%3Aformcomponentid=jackpotjoy%2Fmultiplatform%2FRegisterStepped%3Aregisterform",
        headers: {
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
            "Accept": "text/javascript, text/html, application/xml, text/xml, */*",
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "Cookie": "vid=cf80ca00-fc99-11e8-8747-e354cc86cc5e; username=mozartdiniz; lid=ecce2f70-2eb3-11e9-888e-ef5bd4b84fc6; wsid=9f7260d0-d9fc-11e9-b444-d10d922c1dd1; _gcl_au=1.1.592283948.1570097343; _ga=GA1.2.601378775.1570100090; LONG_LIFE_COOKIE=c5828e47-dd26-48ef-bb6d-395a81e7b34b; UX=multiplatform; DEPRECATED_LATEST_CHANNEL=referral; _csrf=RZ3HmaUJ-su0Cu5QgfRmnJ77; _gid=GA1.2.1782062400.1570443376; rxVisitor=1570443377912I496LAHM02HA8SOCFICO72CPAIC4RQ9D; LATEST_EVENT=login; MEMBER_ID=20241667; Personalisation=depositor; sent-verification-email=true; SESSION_IDENTITY=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzZXNzaW9uLTE3MzI3NTA1NCIsImlzcyI6ImdhbWVzeXMtcHMiLCJleHAiOjE1NzMxMjgyNzUsImlhdCI6MTU3MDQ0OTg3NX0.R4IEFNFb_dEdSBv3Mdir17FBDyv0bQdmyYO6YiSfs2o; mmapi.store.p.0=%7B%22mmparams.d%22%3A%7B%7D%2C%22mmparams.p%22%3A%7B%22pd%22%3A%221601985930692%7C%5C%22196324687%7CCQAAAApVAwDQXt9pMhJo9gABEgABQgDPO8dPBQDkYzymHkvXSKNWY7rpR9dIAAAAAP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FACl3d3cuc3RhcnNwaW5zLnBwYzIucGd0MDEuZ2FtZXN5c2dhbWVzLmNvbQIyEgUAAAAAAAAAAAADkQIAA5ECAP%2F%2F%2F%2F8AAAAAAAAAAUU%3D%5C%22%22%2C%22bid%22%3A%221570450530313%7C%5C%22ldnvwcgeu01%5C%22%22%2C%22srv%22%3A%221601985930702%7C%5C%22ldnvwcgeu01%5C%22%22%7D%2C%22mmengine%22%3A%7B%7D%7D; mmapi.store.s.0=%7B%22mmparams.d%22%3A%7B%7D%2C%22mmparams.p%22%3A%7B%7D%2C%22mmengine%22%3A%7B%7D%7D; mmcore.tst=0.525; dtLatC=1; dtSa=true%7CC%7C-1%7CJoin%20Now%7C-%7C1570454210858%7C254202999_603%7Chttps%3A%2F%2Fwww.jackpotjoy.ppc2.pgt01.gamesysgames.com%2F%7CJackpotjoy%20%5Ep%20Play%20%C2%A310%5Ec%20Get%2030%20Free%20Spins%7C1570449880244%7C%7C; dtCookie=v_4_srv_1_sn_SBENH26OF3IAUFQ5KB407GM5AFAVU9UJ_app-3A3fffde8a567ed80a_1_ol_0_perc_100000_mul_1; rxvt=1570456011270|1570454203017; dtPC=1$254202999_603h-vUPKWUHCVOARITPWCTOBEFPWFIKIVUJTX; JSESSIONID=w04g3uy2rj9gkyl4ekbj9vnv4vp.w04; utag_main=v_id:016d911828b6004e2771f179ecd803078003d07000bd0$_sn:8$_se:1$_ss:1$_st:1570460720408$ses_id:1570458920408%3Bexp-session$_pn:1%3Bexp-session; _gat_Tealium_Tracker=1; VISITOR_LANDED_ID=f65a061f-68c5-4e87-9066-963df4a7e9ac; visitor_landed_id=C21F590E-E90F-11E9-9C24-93146AE5C296; _gali=userName",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Pragma": "no-cache",
            "Origin": "https://www.jackpotjoy.ppc2.pgt01.gamesysgames.com",
            "Referer": "https://www.jackpotjoy.ppc2.pgt01.gamesysgames.com/registerstepped",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin",
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36",
            "X-Prototype-Version": "1.7",
            "X-Requested-With": "XMLHttpRequest"
        },
        method: "POST"
    })
        .then(res => res.text())
        .then(json => console.log(json));
    callback(data);
};
//# sourceMappingURL=CheckUserNameOldServerProvider.js.map