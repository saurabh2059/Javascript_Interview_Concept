// async always returns a promise

// async function getData(){
//     return "nasmaste";
// }

// const data = getData().then(data=> console.log(data));
// console.log(data)





// prev method of handling promise

// const p = new Promise((res,rej)=>{
//    setTimeout(()=>{
//      res("resolved");
//    },5000)
// })

// function pHandler(){
//     p.then(res=> console.log(res))
//     // here js engine didnt wait for 5 sec and immediately execute below
//     console.log("hi without waiting")
// }

// pHandler()






// new method using async await
const asyP = new Promise((res,rej)=>{
   setTimeout(()=>{
     res("resolved using async");
   },7000)
})
const asyP2 = new Promise((res,rej)=>{
   setTimeout(()=>{
     res("resolved using async");
   },10000)
})


async function promiseHandler(){ 
    console.log("hello world")
   const data =  await asyP
//    js engine waited for 10 and then only moved from here
   console.log("after waiting in js in await ")
   console.log(data)


//    js engine actualy doesnt freeze 

//    same promise resolved 
   const val2 = await asyP2

   console.log("after waiting second ")
   console.log(val2)
    

}

promiseHandler() 

// empty promise
// call stack

// as soon as promiseHandler called 
//  there are 2 promises to be resolved
// promises are registered

// js engine moves ahead and executes other code if any

// after 7 sec first promise resolved
// microtask queue
// event loop checks call stack is empty 
// moves microtask to call stack
// executes the code after await

// after 10 sec second promise resolved
// microtask queue
// event loop checks call stack is empty 
// moves microtask to call stack
// executes the code after await
// -------------------------------------------------------
