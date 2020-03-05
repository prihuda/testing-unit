function isPrime(number) {
//     let start = 2;
//     const limit = Math.sqrt(number);
//     while (start <= limit) {
//         if (number % start++ < 1) return false;
//     }
//     return number > 1;
// }
    if (number < 2) return false
    for (let y = 2; y < number; y++) {
        if (number % y === 0) return false
    }
    return true
}
module.exports = isPrime