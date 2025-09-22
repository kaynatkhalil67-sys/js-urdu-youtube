const myarr = [1,2,3,4,5]
const myarr2= ["kainat",'arooj']
const  mystr = new Array(1,2,3,'kainat')
console.log(mystr[3])
myarr.push('kainat')
myarr.pop()
myarr.unshift(9) // add value in the starting and shift other values to next index 
myarr.shift() // removes starting value and shift back the values 
console.log(myarr);
console.log(myarr.includes(5));
console.log(myarr.indexOf(5));

const newarr2 = myarr.join()
console.log(newarr2)
console.log(typeof newarr2); // string 

console.log("A" , myarr);
const myn1 = myarr.slice(1,3) 
console.log(myn1);
console.log("B" , myarr);
const myn2 = myarr.splice(1,3) // [2,3,4] it's giving wrong answer on compiler 
console.log("C", myarr);

console.log(myn1);
