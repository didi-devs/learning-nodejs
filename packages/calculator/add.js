import { validateNumber } from "../../index.js";

var a, b;
var add = function(a, b) {
    validateNumber(a);
    validateNumber(b);
    return a + b;
   // console.log(add(a, b));
    
}

export { add };