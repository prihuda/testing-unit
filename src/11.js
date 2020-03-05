// class user {
//     constructor() {
//         this.data = this.list();
//     }

//     list = () => {
//         return [
//             { id: 1, username: 'mul14', name: 'Mulia' },
//             { id: 2, username: 'durjaka', name: 'Arifandi' },
//             { id: 3, username: 'johndoe', name: 'John Doe' },
//             { id: 4, username: 'norisa', name: 'Norisa' },
//             { id: 5, username: 'sagara', name: 'Sasuke Sagara' },
//         ];
//     }
//
//     findByUsername = (username) =>{
//         return this.data .filter(x => x.username === username)
//
//     }
//
// }

const User = {
    list : [
        { id: 1, username: 'mul14', name: 'Mulia' },
        { id: 2, username: 'durjaka', name: 'Arifandi' },
        { id: 3, username: 'johndoe', name: 'John Doe' },
        { id: 4, username: 'norisa', name: 'Norisa' },
        { id: 5, username: 'sagara', name: 'Sasuke Sagara' },
    ],

    findByUsername : (username) =>{
        // console.log(User.list);
        let a = User.list.filter(x => x.username === username);
        return a[0]
    }

}


// let cc = User.findByUsername('johndoe');
//console.log(cc)

module.exports = User