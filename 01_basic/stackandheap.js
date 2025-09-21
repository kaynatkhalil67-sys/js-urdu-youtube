let nam = "kainat"
let num = 22

console.log( nam + num + " Value") // not a good practice 
 
// string interpolation 

console.log('My name is ${nam} and my age is ${num}') // it's not working don't know why
// new way to declare strng 

const stringes = new String ('kainat-khalil')
console.log(stringes[0])
console.log(stringes.__proto__) //old practice
console.log(stringes.length)
console.log(stringes.toUpperCase()) // but not changed in stringes just in print // new practice
console.log(stringes.charAt(2))
console.log(stringes.indexOf('a'))
const newstringes = stringes.substring(0,5)// last value not included = 0,1,2,3,4 = 5 =>(0,5)
console.log(newstringes)
const newstringes1 = stringes.slice(-10,5) // in this we can give negative values
console.log(newstringes1)
const newstringes2 = '   HE   '
console.log(newstringes2.trim()) // TRIMS THE FAZOOL PLACES
const url = "httpshdyuehbde%20dhdheude"
console.log(url.replace('%20', '-'))

console.log(url.includes('%20'))
console.log(url.split('%20'))
