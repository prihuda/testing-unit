function isLeapYear(x){
        bool = false
    if ((x % 4 == 0 && x % 100 != 0)
            || x % 400 == 0)
        {
            return bool = true
            //console.log(bool)
        }
        else{
            return bool
        //console.log(bool)
        }
}
//isLeapYear(2019)
module.exports = isLeapYear