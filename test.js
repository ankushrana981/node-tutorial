// function test() {
// let count = 0;

// return function () { return count++;}
// }

// let c = test()();

// console.log(c)
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());


// spread and rest operator 

// Example ret Operators 

// function addNumbers(a,b,c, ...rest){
//           console.log(...rest)
//           return a+b+c;
// }
// let result = addNumbers(2,3,4,5,6,7,8)

// console.log(result)

// spread example 

// let students = [ 'Vinay', 'Harry', 'Smith']

// function names(name1,name2,name3){
// console.log(...students)
// return {name1,name2,name3}
// }

// let val = names(...students);
// console.log(val)

// Define a function with three parameters:
// function myBio(...rest) { 
//           return `${rest} runs `;
//         }
        
//         // Use spread to expand an array’s items into individual arguments:
//       var result =  myBio("Oluwatobi","Sofela","CodeSweetly");
//   console.log(result);