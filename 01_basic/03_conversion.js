let score = "kainat" // /33/null/undefined/true(investigation)
console.log(typeof score )
let valueInNum = Number(score) // we have set the score as num and stored its value in valueInNum
console.log(typeof valueInNum)
console.log(valueInNum) //output is (not a number[NaN])
/*
 33 - 33
 kainat - NaN
 Null - 0
 Undefined - Nan
 True - 1
*/

let islogged = 1   //""/"kainat"/kainat
let IsloggedIn = Boolean(islogged)
console.log(typeof IsloggedIn)
console.log(IsloggedIn)

/*
 1 - true
 0 - false 
 "" - false
 kainat - error 
*/

let bay = 22
let myname = String(bay)
console.log(typeof myname)
console.log(myname)
