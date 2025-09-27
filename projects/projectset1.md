# Projects Related to DOM 

## Project Link 
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code 
 
 ## Project 1

```javascript
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

## project 2 solution 
```javascript 
const form = document.querySelector('form');
// to stop the default event
form.addEventListener('submit', function (e) {
  e.preventDefault(); //don't submit stop
  const height = parseInt(document.querySelector('#height').value); // this parseInt is used to convert string into int
  const weight = parseInt(document.querySelector('#weight').value);
  // no need or parseInt cuz it's already element no convo need
  const results = document.querySelector('#results');
  // if this is fetched out of this event then it will take empty value out of scope hai hum chah rhy hein ky event jab ho tb value li jaye mtlb jab submit wala event ho tb
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Give a valid Height ${height}`;
  }
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please Give a valid weight ${weight}`;
  }
  else{
    const Bmi= (weight/((height*height)/10000)).toFixed(2)
    // show the result 
    results.innerHTML=`<span>${Bmi}</span>`;
    if(Bmi<18.6)
    console.log("Under Weight")
    else if(Bmi>24.9)
    console.log("over Weight")
    else if(Bmi==18.6 && Bmi==24.9)
    console.log('normal range')
    else {
      console.log('Invalid range')
    }
  }
});

```