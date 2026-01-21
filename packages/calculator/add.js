import { validateNumber } from "../utils/index.js";

var a, b;
var add = function(a, b) {
    validateNumber(process.argv[2]);
    return a + b;
   // console.log(add(a, b));
    
}

export { add };