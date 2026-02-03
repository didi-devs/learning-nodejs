import { validateNumber } from "../utils/index.js";


var multiply = function(a, b) {
    const [num1, num2] = validateNumber(a, b);
    return num1 * num2;
}

export { multiply };