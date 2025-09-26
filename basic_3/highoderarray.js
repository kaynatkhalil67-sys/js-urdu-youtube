// for of loop
/*
const arry1=[1,2,3,4,5,6]
for (const l of arry1) {
    console.log(l);
}

const kai ="hello kainat"
for (const geet of kai) {
    console.log('each variable', geet);
}
*/
/*
const map =new Map()
map.set('pak',"pakistan")
map.set('in',"India")
map.set('pak',"pakistan")
console.log(map);

for (const [key,value] of map) {
    console.log(key,':', value);
}
    */
/*
const myobj = {
    game1: "cricket",
    game2: "ludo"
}
for (const [game,value] of myobj) {
    console.log(game , ":", value); // ot iterable
}*/
// for in for obj 
/*
const myobj1={
    js: "javascript",
    cpp: 'c++',
    rb: 'rubby'
}
for (const key in myobj1) {
    console.log(key, "shorcut is: ", myobj1[key]);   
}

// for in for arrays

const arr2= ['kaint','arooj',"anam"]
for (const key in arr2) {
    console.log(key,"is for",arr2[key]);
}
    */
/*
const map =new Map()
map.set('pak',"pakistan")
map.set('in',"India")
map.set('pak',"pakistan")

for (const [key,value] in map) {
    console.log(key,":=",map[key]); //gives nothing
}*/

const my =['js','php','c++']
/*
my.forEach( function (item){ // my.forEach(()=>{})
    console.log(item);
})
function printme(item)
{
    console.log(item);
}
my.forEach(printme)
*/
/*
my.forEach(item,index,arr)
{
    console.log(item,index,arr);
    
}
*/
//for array with object

const coding = [
    {
        langnam :"javascript",
        langfile: 'js'
    },
    {
        langnam :"java",
        langfile: 'java'
    },
    {
        langnam :"python",
        langfile: 'py'
    }
]

coding.forEach( (item)=>{
    console.log(item.langnam);
    console.log(item.langfile);
})