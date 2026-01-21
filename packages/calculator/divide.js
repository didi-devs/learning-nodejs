import { validateNumber } from "../../index.js";

var a, b;
var divide = function(a, b) {
    validateNumber(a);
    validateNumber(b);
    return a / b;
}

export { divide };