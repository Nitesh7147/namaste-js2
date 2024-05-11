const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise resolved");
    },8000);
});

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise resolved 2");
    },4000);
});

async function handlePromise(){
    console.log("Hello world");
    const val = await p1;
    console.log("Namaste JS");
    console.log(val);

   // const val2 = await p;
    const val2 = await p2;
    console.log("Namaste JS2");
    console.log(val2);
}
handlePromise();


/**
 * 
 * Interview Question - What if we have two await in a single async function ?
 *  will it wait two times? - NO
 *  both await will run parallel
 *  but what if both promises are different?
 *      - p2 is resolved in 4 second but still it have to wait for p1 to be resolved (which is 8 second) 
 */

