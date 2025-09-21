const balance = new Number(400)
console.log(balance.toString().length)
console.log(balance.toFixed(2)) // floating
const bal = new Number(11123.9837)
console.log(bal.toPrecision(3))

const hel = 100000
console.log(hel.toLocaleString('en-In'))

// ===================

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.3))
console.log(Math.ceil(4.6))
console.log(Math.floor(4.4))
console.log(Math.min(4,5,6,7,8))
console.log(Math.max(4,3,2,5,6,7))
console.log(Math.random()) // value btw 0 to 1
console.log((Math.random()*10)+1)
const max=20
const min=10
console.log(Math.floor((Math.random()*(max - min +1))+ min ))