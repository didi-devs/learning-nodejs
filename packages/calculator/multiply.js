import { validateNumber } from "../utils/index.js";

var a, b;
var multiply = function(a, b) {
    validateNumber(process.argv[2]);
    return a * b;
}

export { multiply };