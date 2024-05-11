// promises

const cart = ["shirts","t-shirts","pants"];

createOrder(cart);  // returns orderId
proceedToPayment(orderId);
// these two api's are asynchronous we don't know how much time it will take
// and they are dependent on each other , we can only do proceedToPayment once we have created the order


// using callback----  here we are PASSING callback function to createOrder API and we are blindly trusting on createOrder API
createOrder(cart, function (orderId){
    proceedToPayment(orderId);
});


// using promise----  here we are ATTACHING the callback function to the promise object
const promise = createOrder(cart);
// when later on promise object is filled with data it will automatically call the callback function
promise.then(function (orderId){
    proceedToPayment(orderId);
});

// promises gives us the trust that it will call callback function whenever there is data inside promise object and it will call only once

