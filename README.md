# Testing Unit Challenge
## Jest 
Jest adalah JavaScript Testing Framework yang menyenangkan dengan fokus pada kesederhanaan. Jest bisa bekerja dengan proyek menggunakan: Babel, TypeScript, Node, React, Angular, Vue dan banyak lagi!
#### Configuration
ada 2 pilihan yarn dan npm
##### yarn
```
yarn add --dev jest
yarn init -y
```
##### npm
```
npm install --save-dev jest
npm init -y
```
##### package.json
```
{
  "scripts": {
    "test": "jest"
  }
}
```
##### Steps
- Buatlah 2 buah folder yang bernama src(ini tidak harus src) dan test(ini tidak harus test)
- Pada folder src berisi function javascript yang akan di uji
- Sedangkan pada folder test berisi metodologi testing pada function tersebut
##### Contoh folder src
```
sum.js
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```
##### Contoh folder test
```
sum.test.js
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```
##### Execution
Terdapat 2 cara yaitu :
- yarn
```
yarn test
```
- npm
```
npm run test
```
##### Output
```
PASS  ./sum.test.js
✓ adds 1 + 2 to equal 3 (5ms)
```
##### Side note
- Gunakanlah toBe untuk primitif data type seperti strings, numbers , or booleans
- Gunakanlah toEqual untuk non-primitif data type seperti object, array
##### toBe
```
const length = require('../src/02');

test('length is equal:', () => {
    expect(length(1,2)).toBe(3);
});
```
##### toEqual
```
const repeatLetter = require('../src/08');

test('Letter repeat:', () => {
    expect(repeatLetter([1, 2, 3])).toEqual([1, 2, 3, 3, 2, 1]);
});
```
## Functional Programming Paradigm
Functional Programming Paradigm adalah sebuah style penulisan pada sebuah function yang menekankan pada komputasi didalam sebuah fungsi matematis dan menghindari perubahan data.
- Hindari penggunaan variable let dan var(mutable variable), terutama pada array dan object atau non-primitif data type
- Hindari perubahan pada sebuah array, object, map ataupun set, lebih baik membuat baru
```
jika kita memiliki sebuah object atau array dan ingin dimanipulasi alangkah baiknya di assign ke obj/arr baru
obj = new Object()
arr = new Array()
```
- Hindari perubahan loop pada function
##### Contoh penggunaan pakai method bawaan
```
const array = Array.from(JSON.parse(json))
// Find all purchases made in February
const february = array.filter(x => new Date(x.created_at).getMonth() === 1)

// Find all purchases made by Ari, and add grand total by sum all total price of items
const granTotalAri = array.filter(x => x.customer.name === "Ari")
    .map(x => x.items.map(a => a.price * a.qty).reduce((a, b) => a + b))
    .reduce((a, b) => a + b )

//Find people who have purchases with grand total lower than 300000. The output is an array of people name 
const lower = array.map(x => ({
        name: x.customer.name,
        total: x.items.map(a => a.price * a.qty).reduce((a, b) => a + b)
    }))
    .filter(x => x.total < 300000)

const removeDulplicate = []

for (const value of lower) {
    if (!removeDulplicate.includes(value.name)) removeDulplicate.push(value.name)
}
```
##### Contoh penggunaan pakai loop
```
const db = JSON.parse(json);
// Find all purchases made in February
for (let i = 0; i < db.length; i++) {
	let d = new Date(db[i].created_at);
	if (d.getMonth() == 1)
		console.log(db[i]);
}

// Find all purchases made by Ari, and add grand total by sum all total price of items
let grandTotalAri = 0;
for (let i = 0; i < db.length; i++) {
	if (db[i].customer.name == "Ari") {
		let total = 0;
		for (let j = 0; j < db[i].items.length; j++) {
			total += db[i].items[j].price * db[i].items[j].qty;
		}
		grandTotalAri += total;
	}
}
console.log(grandTotalAri);

// Find people who have purchases with grand total lower than 300000. The output is an array of people name
let dict = {};
for (let i = 0; i < db.length; i++) {
	let total = 0;
	for (let j = 0; j < db[i].items.length; j++) {
		total += db[i].items[j].price * db[i].items[j].qty;
	}
	if (dict.hasOwnProperty(db[i].customer.name))
		dict[db[i].customer.name] += total;
	else 
		dict[db[i].customer.name] = total;
}
let names = [];
for (let key in dict) {
	if (dict[key] < 300000)
		names.push(key);
}
```
Pada perbandingan diatas dapat disimpulkan penggunaan method bawaan memangkas jumlah line serta lebih praktis dalam penggunaannya dan memudahkan error handling dibandingkan menggunakan loop function


