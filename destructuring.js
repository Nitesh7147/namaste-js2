
// array
const profile = ["Oluwatobi", "Sofela", "codesweetly.com"];

const [firstName, lastName, website] = profile;

console.log(firstName); // "Oluwatobi"
console.log(lastName); // "Sofela"
console.log(website); // "codesweetly.com"

// object de-structure
const course = {
    name: "react js in",
    price: 999,
    courseInstructor: "hitesh"
}
//console.log(course.courseInstructor);
//const{courseInstructor} = course            ----------- o/p - hitesh
const {courseInstructor: instructor} = course
console.log(instructor);