/**how node js works 
 * Call stack ---> tells which code to execute first ,whenever execution of the function is over the function leaves call stack 
 */
console.log("Starting up ")

setTimeout(()=>{
    console.log("2 seconds log")
},2000)

setTimeout(()=>{
    console.log("0 seconds log")
},0)

console.log("finishing up ")

/* order -> 
stating up 
finishing up 
0 log 
2 log    */


//this setTIme is from C++ and hence all those things which node takes from C++ are gone to Node APIs 
