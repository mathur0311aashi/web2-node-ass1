console.log("Calculator started");

const args = process.argv.slice(2);

const operation = args[0] || "add";
const a = Number(args[1]) || 10;
const b = Number(args[2]) || 5;

console.log("Operation:", operation);

if (operation === "add") {
    console.log("Result:", a + b);
}
else if (operation === "subtract") {
    console.log("Result:", a - b);
}
else if (operation === "multiply") {
    console.log("Result:", a * b);
}
else if (operation === "divide") {
    console.log("Result:", a / b);
}
else {
    console.log("Invalid operation");
}