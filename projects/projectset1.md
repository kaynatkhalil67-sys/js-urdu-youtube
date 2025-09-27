# Projects Related to DOM 

## Project Link 
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code 
 
 ## Project 1

```javascript
console.log("hitesh")
const buttons=document.querySelectorAll(".button")
const body =document.querySelector("body")

buttons.forEach( function(b){
  console.log(b)
  b.addEventListener('click',function(e){
console.log(e)
console.log(e.target)
switch (e.target.id){
  case 'grey': 
    body.style.backgroundColor = 'grey'
    break;
  case 'white': 
    body.style.backgroundColor = 'white'
    break;
  case 'yellow': 
    body.style.backgroundColor = 'yellow'
    break;
  case 'blue': 
    body.style.backgroundColor = 'blue'
    break;
  default:
    console.log("default matched")
    break;
}
  })
})
```