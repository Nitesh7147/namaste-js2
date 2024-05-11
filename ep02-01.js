const GITHUB_API = "https://api.github.com/users/akshaymarch7";
const user = fetch(GITHUB_API);
// we will get promise object inside user, fetch returns a promise
// promise objects are immutable - so whenever it is fullfilled and we have data inside promise object no one can edit the user object
console.log(user);
user.then(function(data){
    console.log(data);
})

