console.log("start.exe...")
console.log("logic.exe...")
console.log("complete.exe")

// asynchronous programming language means it does not wait the previous code to execute and then go to next code 
// it does not wait 
// it just executes without following an order and hence it is faster 
/* js and nodeJs is an asynchronous programming language */
let a = 10 
let b = 0 

setTimeout(()=>{
    b=20

},2000)
console.log(a+b)
//here it will not print 30 , rather it will print 10 becuase it is an asynchronous language and it is a problem with async language 