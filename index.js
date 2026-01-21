var a, b;

function validateNumber(a, b) {
    try{
        if  (!isNaN(a) && !isNaN(b) && b != 0) {
            console.log("x is a number");
        } else {
            console.log("Invalid number Provided");
        }
    } catch (err) {
        console.log("Error validating number:", err);
    }
}

export { validateNumber };