const heroes1 = ['kainat','arooj','sanam']
const heroes2 = ['anam' , 'sadaf', 'warda']
const h4 =['hello ', 'world' , 2]
/*
heroes1.push(heroes2)
console.log(heroes1); // ['','','',['','','']] 
console.log(heroes1[3][2]);
*/
const heroes3 =heroes1.concat(heroes2)
console.log(heroes3);

 const heroes4 = [...heroes1 , ...heroes2, ...h4] // will spread them 
 console.log(heroes4);

 const anarray1= [1,2,3,[4,5,6],7,[8,6, [9,1,2]]]
 const anarray2 = anarray1.flat(Infinity) // this will merge array into array into array into a 
 // one array with infinity depth
 console.log(anarray2);

 console.log(Array.isArray('kainat')); // it tells whether its a array or not T/F
  console.log(Array.from('kainat')); // it converts it into array
 console.log(Array.from({Name: 'kainat'})); // []

 let a1= "hate"
let a2 = "you"
console.log(Array.of(a1,a2));
 

 
