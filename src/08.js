// class arr {
//     constructor(a) {
//         this.varA = a;
//     }
//     setB = (b) => {
//         this.varB = b;
//     }
//     arrayMirroring = () => {
//         let cc = this.varB.slice().reverse()
//         console.log(cc);
//         let myArr = this.varA.concat(cc)
//         console.log(myArr)
//         return myArr
//     }
// }

const arrayMirroring = (a=[]) => {
    let cc = a.slice().reverse()
    // console.log(cc);
    let myArr = a.concat(cc)
    //console.log(myArr)
    return myArr
}

//arrayMirroring([1, 2, 3])
module.exports = arrayMirroring