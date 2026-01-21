var a, b;

function validateNumber(a, b) {
    try{
        if  (Number.isNaN(a) && Number.isNaN(b) && b != 0) {
            console.log("Input is valid");
        } else {
            console.log("Invalid number Provided");
        }
    } catch (err) {
        console.log("Error validating number:", err);
    }
}

export { validateNumber };