const moment = require('moment');
let currentDate = moment().format('YYYY MM DD')
// var a = moment([2007, 0, 28]);
// var b = moment([2007, 0, 29]);
// let ax = a.diff(b, 'days') // 1
// console.log(ax)
let Item = {
    rs:[],
    list :
        [
            { id: 1, name: 'Kecap',    sale_start_at: new Date('2018-10-01'), sale_end_at: new Date('2018-10-10') },
            { id: 2, name: 'Sambal',   sale_start_at: new Date('2018-10-15'), sale_end_at: new Date('2018-10-30') },
            { id: 3, name: 'Merica',   sale_start_at: new Date('2018-08-01'), sale_end_at: new Date('2018-08-31') },
            { id: 4, name: 'Detergen', sale_start_at: new Date('2019-02-10'), sale_end_at: new Date('2019-10-10') },
            { id: 5, name: 'Sapu',     sale_start_at: new Date('2017-09-01'), sale_end_at: new Date('2030-07-15') },
        ],


    findByID (id) {
        // console.log(User.list);
         let a = Item.list.filter(x => x.id === id);
         this.rs=a[0];
         return this;
    },
    isOnSale () {
        let obj = this.rs
        let sale_end_at =  moment(obj.sale_end_at).format('YYYY MM DD');
        let time = moment(sale_end_at, "YYYY MM DD")
        let time2 = moment(currentDate, "YYYY MM DD")
        let proc = time.diff(time2,"days")
        if (proc > 0){
            return true;
        }
        else
        {
            return false;
        }

        return this
    },
}


// let a  = Item.findByID(5).isOnSale();
//console.log(a)
module.exports = Item
