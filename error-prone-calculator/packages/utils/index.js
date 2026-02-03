function validateNumber() {  
      const[, , a, b] = process.argv;  
    try{
        const num1 = Number(a);
        const num2 = Number(b);
        if  (!Number.isNaN(num1) && !Number.isNaN(num2)) {
            return [num1, num2];
        } else {

            throw new Error("Invalid number Provided");        
        }
    } catch (err) {
        console.log("Error validating number:", err);
        throw err;
    }
}

export { validateNumber };