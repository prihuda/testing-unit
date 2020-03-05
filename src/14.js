const isIsogram = (str) => {
   const isIsogram = str => str.split("").every((c, i) => str.indexOf(c) == i)
   return isIsogram(str)
}
module.exports = isIsogram