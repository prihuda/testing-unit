const stats = (a=[]) => {
    let obj = new Object()
    const mean = arr => arr.reduce((a,b) => a + b, 0) / arr.length
    const median = arr => {
        const mid = Math.floor(arr.length / 2),
            nums = [...arr].sort((a, b) => a - b);
        return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
    };

    const modes = numbers => {
        var modes = [], count = [], i, number, maxIndex = 0;

        for (i = 0; i < numbers.length; i += 1) {
            number = numbers[i];
            count[number] = (count[number] || 0) + 1;
            if (count[number] > maxIndex) {
                maxIndex = count[number];
            }
        }

        for (i in count)
            if (count.hasOwnProperty(i)) {
                if (count[i] === maxIndex) {
                    modes.push(Number(i));
                }
            }

        modes.push(' each appeared '+maxIndex+' times')
        modes = modes.sort().reverse()
        modes =  modes.toString();
        return modes;
    }
    const arrMax = arr => Math.max(...arr);
    const arrMin = arr => Math.min(...arr);
    const arrSum = arr => arr.reduce((a,b) => a + b, 0)
    const arrCount = arr => arr.length
    const range = arr => Math.max(...arr) - Math.min(...arr);
    obj = {
        mean : parseFloat(mean(a).toFixed(13)),
        // mean : mean(a),
        median : median(a),
        range : range(a),
        mode : modes(a),
        largest : arrMax(a),
        smallest : arrMin(a),
        sum : arrSum(a),
        count : arrCount(a),
    };
    return obj;
    // const
    // console.log(obj)
}
// const a = stats([10, 2, 38, 23, 38, 23, 21])
// console.log(a)
module.exports = stats