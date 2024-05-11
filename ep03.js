// creating a promise

const cart = ["shirts","t-shirts","pants"];

// consumer
const promise = createOrder(cart)  //orderId
console.log(promise);
promise
    .then(function(orderId){
    console.log(promise);
    console.log(orderId);
    return orderId;
    })
    .then(function(orderId){
        return proceedToPayment(orderId);
    })
    .then(function(paymentInfo){
        console.log(paymentInfo);
    })
    .catch(function(err){
    console.log(err.message);
    })
    .then(function(){
        console.log("No matter what happens, I will execute");
    })


// producer
function createOrder(cart){
    const pr = new Promise(function(resolve,reject){
        // create order
        // validate cart
        // orderId
        // business logic
        if(!validateCart(cart)){
            //throw an error / reject promise
            const err = new Error("Cart is not valid");
            reject(err)
        }
        // logic for createOrder
        const orderId ="12345";
        if(orderId){
            setTimeout(function(){
                resolve(orderId)
            },5000);
        }

    });

    return pr;
}

function validateCart(cart){
    return false;
}

function proceedToPayment(orderId){

    return new Promise(function(resolve,reject){
        resolve("Payment done successfull :" + orderId);
    });
}

