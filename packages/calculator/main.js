import { add } from "./add.js";
import { subtract } from "./subtract.js";
import { multiply } from "./multiply.js";
import { divide } from "./divide.js";

const [, , operation, a, b] = process.argv;

try {
  switch (operation) {
    case "add":
      console.log(a + b);
      break;

    case "subtract":
      console.log(subtract(a, b));
      break;

    case "multiply":
      console.log(multiply(a, b));
      break;

    case "divide":
      console.log(divide(a, b));
      break;

    default:
      throw new Error("Unknown operation");
  }
} catch (err) {
  console.error(err.message);
  process.exit(1);
}
