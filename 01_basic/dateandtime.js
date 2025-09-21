/*
let mydate = new Date()
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toLocaleString());

console.log(mydate.toDateString());
console.log(typeof mydate);
*/
let createdate = new Date(2025,8,14)
console.log(createdate.toDateString());

let mycreatedate = new Date(2025,8,14,5,9,9)
console.log(mycreatedate.toLocaleString());

let mytime = Date.now()
console.log(mytime);
console.log(mycreatedate.getTime());
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));

console.log(createdate.toLocaleString('default', {
    weekday: "long"

}))


