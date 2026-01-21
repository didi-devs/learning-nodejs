import { validateNumber } from "../utils/index.js";

var a, b;
const [a, b, ...rest] = process.argv;
var divide = function(a, b) {
    validateNumber(process.argv[2]);
    return a / b;
}

export { divide };