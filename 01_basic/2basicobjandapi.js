const course={
    coursename: "JaveScript",
    Price: 1000,
    courseinstructor: "kainat"
}
const {courseinstructor}=course
console.log(courseinstructor); // now just call like this don't need to go for course.courseinstr..
// or
const {courseinstructor: In} = course
console.log(In);
// JSON ===> It's a object with no name and it's keys are also string and values too
// we call API from JSON
/*{
    "Name": "Kainat",
    "Price": "zero",
    "course":"Js"
}*/