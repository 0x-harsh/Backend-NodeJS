function add(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}

// default export, can be used once only, because it overwrites the values
// module.exports = {
//     addFun: add,
//     subFun: sub
// }

// named export, there are no number of limits to use named export because its unique
exports.mul = (a, b) => a * b
exports.div = (a, b) => a / b