function checkNumber(num) {
    if (num % 2 === 0) {
        return num + " is Even";
    } else {
        return num + " is Odd";
    }
}

module.exports = {
    checkNumber
};