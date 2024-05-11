const cart = ["shoes","shoes","pants","t-shirts"];

api.createOrder(cart, function (orderId){
    api.proceedToPayment(orderId, function (paymentInfo){
        api.showOrderSummary(paymentInfo, function(){
            api.updateWallet()
        })
    })
})

//  callback issues - 
// -> callback hell - one callback function into another function , so it will become a nested callback
// -> inversion of control - we gave control of our code to other function but what if the function has some bug or it stops execution due to
//                           some reason. 


// callback hell issue can be handled by promise chain
createOrder(cart)
.then(function (orderId){
    return proceedToPayment(orderId);
})
.then(function (paymentInfo){
    return showOrderSummary(paymentInfo);
})
.then(function (wallet){
    return updateWallet(wallet);
});
// above code can also be written in arrow function also



