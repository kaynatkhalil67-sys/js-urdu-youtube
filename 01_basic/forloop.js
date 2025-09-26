for (let i = 0; i < 10; i++) {
    console.log('outter loop is: ${i}')
    for (let j = 0; j < 10; j++) {
        console.log(i+ "*" + j + "=" +i*j);
    }
}

 const myarray =["kainat","arooj","sanam"]
 for (let index = 0; index <= myarray.length; index++) {
    const element = myarray[index];
    console.log(element);
    
 }

 for (let index = 1; index < 20; index++) {
    if (index ==5) {
        console.log("detected 5");
         break; // continue(ek dffa maf kr deta hai sara chala deta hai)
    }
    console.log("run");
 }