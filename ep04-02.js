// example of async/await
const API_URL = "https://api.github.com/users/akshaymarch7";
async function handlePromise(){

   try{
    const data = await fetch(API_URL);
    // data will get Response object and with this response object we will convert this data to json
    const jsonValue = await data.json()  // data.json its again a promise
    console.log(jsonValue);
   }catch(err){
    console.log(err);
   }

}
handlePromise();

/**
 * handlePromise function execution will suspend at (await fetch(API_URL)) and it will only the function execution will resume
 * after this fetch call has successfully fullfilled, whether it is rejected or resolved. 
 * 
 * how fetch works?
 * basically a fetch function is a promise when this promise is resolved it gives a response object and this response object has a body
 * which is a readable stream and if you want to convert this readable stream to json you have to do .json (this .json is again a promise)
 * and when this promise is resolved it gives you the json value
 * fetch() => Response.json() => jsonValue
 * 
 */