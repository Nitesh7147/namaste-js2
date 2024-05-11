// const p1 = fetch("make api call - it will return a promise")
const p1 = new Promise(function(resolve,reject) {
    setTimeout(function(){
        reject("P1 reject")
    },1000)
})
const p2 = new Promise(function(resolve,reject) {
    setTimeout(function(){
        resolve("P2 Success")
    },3000)
})
const p3 = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        resolve("P3 Success")
    },2000)
})

Promise.all([p1,p2,p3]).then(res =>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})