const even = require("./modules/isEven");
const logger = require("./modules/logger");

console.log("===== SMART UTILITY TOOLKIT =====");

logger.log("Program started");

console.log("\n1. Even/Odd");

console.log(even.checkNumber(10));
console.log(even.checkNumber(7));

console.log("\n2. Calculator");
require("./calculator");

console.log("\n3. Dice Generator");
require("./dice");

console.log("\n4. File Manager");
require("./fileManager");

console.log("\n5. HTTP Server");
require("./server");