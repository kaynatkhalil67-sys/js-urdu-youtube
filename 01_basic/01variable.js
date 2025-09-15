const accId = 12345
let Email = "abc@gmail.com"
var pass = "123456789"
city = "lahore"
let accval ;
/*
prefer not to use var because of issue in block scope
*/ 
// accId = 231 not allowed
pass = "4321"
city = "Islamabad"
console.log(accId);
console.table([pass, city, Email, accval]);
