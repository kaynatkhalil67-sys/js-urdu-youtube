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
/*
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

 const val = coding.forEach((item)=>{
    console.log(item.langnam);
    console.log(item.langfile);
    return item;
 })
 console.log(val);
 */ // for each value do not returns value 
/*
 const myNums=[1,2,3,4,5,6,7,8,9,10]
 const newnums = myNums.filter( (num)=> num>4)
 console.log(newnums);
 
const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2001}]

  let userbooks= books.filter( (bk)=> bk.genre ==='History')
  userbooks= books.filter( (bk)=> { return bk.publish>=2000} )
  console.log(userbooks);
 */ 
 // maps 
const mynewnums = [1,2,3,4,5,6,7,8,9,10]
//const newnewnums = mynewnums.map( (nums)=> nums + 10)
//chaning 
/*
const newnewnums =mynewnums
            .map( (nums)=> nums*10)
            .map( (nums)=> nums+1)
            .filter( (nums)=> nums>=40)
console.log(newnewnums);
// reduce
const initialvalue=0
const sum =mynewnums.reduce( (acc , current)=>acc+current,initialvalue
)
console.log(sum);
// another way
const sum2 =mynewnums.reduce( (acc,current)=> {
    console.log(acc);
    
    return acc+current
},0)
console.log(sum2);
*/
const shoppingcart = [
    {
        item: "js",
        price: 2999
    },
    {
        item: "python",
        price: 4999
    },
    {
        item: "web",
        price: 6999
    },
]

const newsum = shoppingcart.reduce( (acc,current)=> acc+current.price,0)
console.log(newsum);

