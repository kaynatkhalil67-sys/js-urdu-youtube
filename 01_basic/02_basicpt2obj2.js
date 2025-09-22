
/* object literal
const mysym = Symbol('key1')

const Jsuser = {
    Name: "kainat",
    "full name" : "kainat khalil",
    age: 22,
    //mysysm2: "mykey1",
    [mysym]: "key1",
    location: "lahore",
    gmail: "kaynatkhalil67@gmail.com",
    isloggedIn: false,
    lastloggedIn:['Monday','Tuesday']

}
//console.log(Jsuser.gmail);
//console.log(Jsuser["full name"])
//console.log(Jsuser["mysysm2"]);
//console.log(typeof Jsuser["mysysm2"]);// here it's type is string not used as symbol
//console.log(Jsuser[mysym]);
//console.log(typeof Jsuser[mysym]);
Jsuser.gmail="kaynatkhalil655@yahoo.com"
//Object.freeze(Jsuser)// it will now freeze the Jsuser object no changes after this will work
//console.log(Jsuser.gmail);
//console.log(Jsuser);


Jsuser.Greeting=function(){
    console.log("HELLO JS USERS");
    
}
//console.log(Jsuser.Greeting);
console.log(Jsuser.Greeting());
Jsuser.Greeting2=function(){
    console.log('HELLO JS USERs ,${this.gmail}'); // in my compiler it's not working
    
}
console.log(Jsuser.Greeting2());
*/

//================================part 2=============================

// object singleton 

// const Tinderuser = new Object() way 1 for singleton constructor 
const Tinderuser1 = {} // way 2 for non singleton constructor 
Tinderuser1.Id = '123'
Tinderuser1.Name = "kainat khalil"
Tinderuser1.IsloggedIn = false
//console.log(Tinderuser1);
const T2 ={
    gmail: "abc123@gmail.com",
    fullname:{
          Userfullname: {
            Firstname: "kainat",
            Lastname: "khalil"
          }
    }
}
console.log(T2.fullname.Userfullname.Lastname);

const obj3={ 1:'a', 2:'b'}
const obj4={ 3:'a', 4:'b'}
//const obj5 = { obj3 , obj4} // array ki terhan problematic way
//const obj5 = Object.assign({}, obj3,obj4) // {} = target, obj3, obj4 = source objects 
const obj5 = {...obj3, ...obj4} // most used and easyy less paranthesis etc
console.log(obj5);

const new1 =[
    {
        id: 1,
        gmail: 'abc112@gmail.com'
    },
    {
        id: 1,
        gmail: 'abc112@gmail.com'
    }
]
console.log(new1[1].gmail);
console.log(Tinderuser1);
console.log(Object.keys(Tinderuser1)); // for loop purpose for keys
console.log(Object.values(Tinderuser1));// for loop purpose for values 
console.log(Tinderuser1.length)
console.log(Object.entries(Tinderuser1));
console.log(Tinderuser1.hasOwnProperty('IsloggedIn'));
