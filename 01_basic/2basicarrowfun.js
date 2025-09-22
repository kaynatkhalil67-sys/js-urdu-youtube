const user={
    Name: "Kainat",
    price: 199,
    welcomemsg: function()
    {
        console.log('${this.username}, welcome to website'); // here this is used because current scope is just the object part
        console.log(this);
        
    }

}
/*
user.welcomemsg()
user.username="Fatimah"
user.welcomemsg()
*/
// console.log(this); // {}
/*
function Chai(){
    let username="kainat"
    console.log(this.username);
    
}
Chai()
*/
// another way to define function 
const chai=()=>{
    username="kainat"
}
//chai()
const addtwo = (num1, num2) =>{
    return num1 +num2
}
console.log(addtwo(2,4));

const add2 = (num1, num2) => num1 +num2
console.log(add2(4,4));

const add3 = (num1, num2) => (num1 +num2)
console.log(add3(1,4));

const add4 = (num1, num2) => ({username:"kainat"})
console.log(add4(1,4));

