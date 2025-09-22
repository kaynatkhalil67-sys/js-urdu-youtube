function one(){
    const Name = "kainat"
    function two(){
        const age =2
        console.log(Name);
    }
    //console.log(age); // not accessible cuz out of scope
    two()
}
one()

if(true)
{
    const username= "kainat"
    if(username=="kainat")
    {
        const web =" youtube"
        console.log(username + web); 
    }
    //console.log(web); out of scope so error
}
//console.log(username); out of scope so error
console.log(addone(5)) // no error and 6
function addone(num1)
{
    return num1 + 1
}
//console.log(addtwo(5)) here it will give error bcuz its holded in a variable 
const addtwo =function(num){
    return num+2
}
console.log(addtwo(5))

