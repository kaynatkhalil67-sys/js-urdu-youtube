/*
let some = 3
let newsome = -some
console.log(newsome)
*/

let str1 = "bye"
let str2 = ' kainat'
let str3 = str1 + str2
console.log(str3);
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + (2 + 2)); // confusing("1" + 2 + 2) = 122 because paranthesis are not used 
console.log(1 + 2 + "2");
// string will be considered as string and other are added or operated as told 
console.log((2+3) * 5 % 8);
// use proper paranthesis 
// using these operators down before are not good practices 
console.log(+true);
// console.log(true+); error is given
console.log(+"");

let num1, num2, num3 
num1 = num2 = num3 = 2+2 // it says num1 , num2 , num3 all have same value 4 and not a good practice
console.table([num1, num2, num3]);

let counter = 100
counter++ // / ++counter
console.log(counter); //postfix and prefix 











