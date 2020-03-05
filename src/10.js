const censored = (str,a=[],strRepl='#') => {
    a.forEach(function(word) {
        let find = new RegExp("\\b" + word + "\\b", "gi");
        let repl = Array(word.length+1).join(strRepl);
        str = str.replace(find, repl);
    });
    // console.log(str)
    return str;
}
//censored('Saya ingin makan nasi goreng.', ['saya', 'nasi'])
module.exports = censored