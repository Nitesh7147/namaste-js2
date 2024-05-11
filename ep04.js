/***
 * What is async? - its a keyword used to create async function
 * What is await?
 * How async await works behind the scenes?
 * Examples of using async/await
 * Error Handling
 * Async await vs Promise.then/.catch
 *
 */

/**
 * async function always returns a promise
 * if you dont return a promise from it, if you return a value then this function will automatic wrap this value inside a promise
 * and return promise.
 * async and await combo is used to handle promises.
 * await is a keyword and can only be used inside an async function to handle promises and this promises are asynchronous
 *
 */

// async function getData() {
//   return "Namaste";
// }
// const dataPromise = getData();
// console.log(dataPromise);
// dataPromise.then((result) => {
//   console.log(result);
// });

const p = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        resolve("Promise resolved value");
    },10000)
})


// handle promise using then - before async await
function handlePromiseBefore() {
  p.then((res) => {
    console.log(res);
  });
  console.log("Namaste JS - handle promise using then");
}
handlePromiseBefore();



// handle promise using async await
async function handlePromise() {
  const val = await p;
  console.log("Namaste JS - handle promise using async-await");
  console.log(val);
}
handlePromise();

/**
 * Q - What is the difference between handling promise using normally(then) and using async-await ?
 *   using then - Javascript engine will not wait, it will not wait to be promise resolved (first line no 41 will print then promise)
 *   using async-await - JS engine will wait for promise to resolved (at line no 49 js engine will wait) 
 *                     - wait in the sense the function will be out from the call stack (suspend , not block) for that time
 */