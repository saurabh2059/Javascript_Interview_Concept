// createOrder , proceedToPayment, OrderSummary , updateWallet

const cart = ["shoes", "socks","polish"];


function createOrder(cart){
    return new Promise(function(resolve,reject){
        if(cart.length === 0){
            let err = new Error("cart is empty . please add some items ");
            reject(err);
            

        }else{
            console.log("order is being created");
            setTimeout(function(){
                let orderId = "98765";
                resolve(orderId);
            },2000)
        }
    })
};

function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        if(orderId!=null){
            console.log("payment in process");
            setTimeout(function(){
                let paymentInfo = "payment successful";
                resolve(paymentInfo);
            })
        }else{
            let err = new Error("order id is invalid");
            reject(err);
        }
    })
};


function OrderSummary(payInfo){
    return new Promise(function(resolve, reject){
        if(payInfo!=null){
            console.log("fetching order summary");
            setTimeout(function(){
                let orderSummary = "order summary : item1 , item2 ";
                resolve(orderSummary);
            },2000)
        }
        else{
            let err = new Error("payment info is invalid");
            reject(err);
        }
    })
};

function updateWallet(orderSummary){
    return new Promise(function(resolve,reject){
        if(orderSummary!=null){
            console.log("updating wallet");
            setTimeout(function(){
                let walletInfo = "wallet updated successfully";
                resolve(walletInfo);
            },2000);
        }
        else{
            let err = new Error("order summary is invalid");
            reject(err);
        }
    })
}

createOrder(cart)
.then(function(orderId){
    console.log(orderId)
   return proceedToPayment(orderId)

})
.then(function(payInfo){
    console.log(payInfo)
    return OrderSummary(payInfo)
})
.then(function(orderSummary){
    console.log(orderSummary)
    return updateWallet(orderSummary);
})
.then(function(){
    console.log("all work done");
})
.catch(function(e){
    console.log(e.message)
})