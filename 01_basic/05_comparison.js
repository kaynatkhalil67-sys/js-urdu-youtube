console.log("2" > 1)
console.log("02" > 1)

// these types of conversions confuses 
console.log(null > 0)
console.log(null == 0) // it works differently 
console.log(null >= 0) // convert null as 0 or NaN and then compares so that's why true

console.log(undefined >= 0)
console.log(undefined == 0)

// === strict check it not only checks values it also checks datatype 
console.log("2"===2) // false 