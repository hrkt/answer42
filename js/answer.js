// using BigInt(https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
exports.answer42 = function() {
    const x = -80538738812075974n
    const y = 80435758145817515n
    const z = 12602123297335631n
    return  x ** 3n + y ** 3n + z ** 3n
}

// using Number(https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Number)
exports.answer42InNumber = function() {
    const x = -80538738812075974
    const y = 80435758145817515
    const z = 12602123297335631
    return  x ** 3 + y ** 3 + z ** 3
}
