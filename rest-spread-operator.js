// ES6

// rest - elements combine to an array
function addNumbers(a,b,c,...others){
    console.log(others);
    return a+b+c;
}
var sum = addNumbers(2,4,6,8,10,12);
//console.log(sum);

// spread - elements break from an array to a variable
var names = ["Ajay","Amit","Anuj"];
function getNames(name1,name2,name3){
    console.log(`name1 : ${name1}, name2 : ${name2}, name3 : ${name3}`);
}
//getNames(...names)

// object ke sath - rest
var students = {
    name: "Ajay",
    age: 28,
    hobbies: ["Singing","Cricket"]
}
const {name,...rest} = students
console.log(rest);

// object ke sath - spread
// pass by value in object using spread operator
var newstudents = {
    ...students,
    age: 30
}
console.log(newstudents);

