import { validateNumber } from "../utils/index.js";

var divide = function(a, b) {
    validateNumber(process.argv[2]);
    return a / b;
}

export { divide };