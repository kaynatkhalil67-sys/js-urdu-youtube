/* 
function saymyname(){
    console.log("hello");
    console.log("kainat");
    console.log("you");
    console.log("is");
    console.log("cute");
}
saymyname()
function add2num(n1,n2){
    //let res= n1+n2
   // return res
   //another way
   return n1+n2
}
add2num(2,4)
const result= add2num(3,5)
console.log("result: ", result);
 // another way to pass argument 

 function userloggedin (username){ // another way ==> (username = "kainat")
    if(username=== undefined)
    { console.log("Please Enter a name");
        return
    }
    else
    return '${username} is logged in' // this is not running on my compiler
 }
 const stored = userloggedin('kainat')
 console.log(stored);
 */

 function calpricecart(val1,val2,...num1){
  return num1
 }
 console.log(calpricecart(200 , 300, 400, 500));

const user ={
    username: "kainat",
    Price: 199
}
 function objhandler(anyobject)
 {
    console.log('${anyobject.username} and its price is ${Price}');    
 }
 //objhandler(user)
 //another way
 console.log(objhandler({username: "Kainat", Price: 199})) // not giving the right answer 
 
 const myarr1=[200,100,500,3000]
function getarray2nd(getarray){
    return getarray[2]
}
console.log(getarray2nd(myarr1));
