const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve("p1 success"), 3000);
})
const p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>reject("p2 fail"), 1000);
    // setTimeout(()=>resolve("p2 success"), 1000);
})
const p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve("p3 success"), 2000);
})

Promise.all([p1,p2,p3])
.then(res=> console.log(res))
.catch(e=> {
    console.log("second failed so .all showed error")
    console.error(e)})



Promise.allSettled([p1,p2,p3])
.then(res=>{
    console.log("waits for all and shows error and success")
    console.log(res)})
.catch(e=> console.error(e))


Promise.race([p1,p2,p3])
.then(res=> console.log(res))
.catch(e=> {
    console.log("first to fail or sucess . here failed")
    console.error(e)})

    
Promise.any([p1,p2,p3])
.then(res=> {
    console.log("waits for the first promise to resolved success here it is p3 because p2 failed")
    console.log(res)})
.catch(e=> console.error(e))







