const cart = ["saurabh",'aryal'];

const promise = createOrder(cart);

promise.then(
    function(orderId){
        console.log("order created with id:", orderId)

        return orderId;
    })
.then(function(orderId){
    return proceedPayment(orderId);
})
.then(function(payInfo){
    console.log(payInfo);
})
.catch(function(e){
    console.log(e.message)
}) // after catch whatever we write willl be called even in error;

.then(function(){
    console.log("i will defenitely be called")
})


function proceedPayment(orderId){
    return new Promise(function(resolve,reject){
        resolve("payment success")
    })
}

function createOrder(cart){

    let pr = new Promise(function(resolve, reject){

        if(!validateCart(cart)){
            let err = new Error("cart not valid")
            reject(err)
        }else{
            let orderId = "12345"
    console.log("order is being resolved")
            setTimeout(function(){
            
            resolve(orderId)
            },1000)
          

        }
    })

    return pr
}

function validateCart(cart){
    return true;
}