import { validateNumber } from "../utils/index.js";

var a, b;
var subtract = function(a, b) {
    validateNumber(process.argv[2]);
    return a - b;
}

export { subtract };
