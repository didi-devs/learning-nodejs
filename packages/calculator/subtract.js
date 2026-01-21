import { validateNumber } from "../../index.js";

var a, b;
var subtract = function(a, b) {
    validateNumber(a);
    validateNumber(b);
    return a - b;
}

export { subtract };
