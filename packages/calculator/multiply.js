import { validateNumber } from "../../index.js";

var a, b;
var multiply = function(a, b) {
    validateNumber(a);
    validateNumber(b);
    return a * b;
}

export { multiply };