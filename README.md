Initialize a new Node.js project called "error-prone-calculator" using npm init. Structure it as a monorepo with npm workspaces to manage multiple packages: one workspace for a shared utilities module (handling basic error checks), and another for the main calculator application that imports and uses the utilities.

In the root package.json, set up workspaces for ["packages/*"]. Then, create two subdirectories under "packages/": "utils" and "calculator".
For the "utils" package:

- Use npm init to set it up with type: "module" in its package.json.
 
- Create an index.js file that exports a function called validateNumbers. This function should take an array of arguments, check if they are all valid numbers (using isNaN or similar), and throw a custom Error with a message like "Invalid number provided" if any aren't. Include try-catch in the function to demonstrate error handling by logging the error stack before re-throwing.

For the "calculator" package:

- Use npm init with type: "module".
-  Install the "utils" workspace as a dependency using npm install ../utils (from within the calculator directory).
- Create separate ESM modules: add.js exporting an add function that takes two numbers, validates them using the imported validateNumbers, adds them, and returns the result (with try-catch to handle and log any validation errors).
- Similarly, create subtract.js for subtraction, multiply.js for multiplication, and divide.js for division (include error handling for division by zero in divide.js by throwing a custom Error).
- In a main.js file, import all these operation modules and the process object to parse command-line arguments (e.g., node main.js add 5 3).
- Use a switch statement based on the first argument (operation type) to call the corresponding function with the remaining arguments, wrap the call in try-catch to handle and display any errors gracefully (e.g., console.error the message and exit with code 1).
- Update the calculator's package.json with scripts: {"start": "node main.js", "add": "node main.js add", "subtract": "node main.js subtract"} (and similar for others, but they'll need arguments passed).

From the root, run npm install to link workspaces. Test by running npm run start -- add 10 5 from the calculator directory, or use npx to execute without global install (e.g., npx -w calculator node main.js multiply 4 6). Update a package version in utils, then use npm update in calculator to pull the changes. Introduce deliberate errors (like passing strings instead of numbers) to verify error handling propagates correctly across modules.


Note: you're to create a customer module for logging, (instead of using console.log directly) as depicted in the examples in the articles/videos of the tutorial.
