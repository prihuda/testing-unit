function symmetrical(str) {
    let re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, "");
    let len = str.length;
    for (let i = 0; i < len; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
module.exports = symmetrical