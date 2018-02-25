"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function delay(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            try {
                throw new Error("YYY");
                // resolve();
            }
            catch (err) {
                reject(new Error("setTimeout"));
            }
        }, 1000);
    });
}
exports.delay = delay;
//# sourceMappingURL=helpers.js.map