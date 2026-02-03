import { validateNumber } from "../utils/index.js";


var multiply = function(a, b) {
    validateNumber(process.argv[2]);
    return a * b;
}

export { multiply };