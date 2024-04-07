var numUser = Number(
  prompt("enter a num (divisible by 3, 5, both, or neither)")
);

// var frizzBuzz = function (num) {
//   if (num % 3 === 0 && num % 5 !== 0) {
//     console.log("fizz");
//   } else if (num % 5 === 0 && num % 3 !== 0) {
//     console.log("buzz");
//   } else if (num % 5 === 0 && num % 3 === 0) {
//     console.log("fizz buzz");
//   } else {
//     console.log("none");
//   }
// };
var frizzBuzz = function (num) {
  if (num % 5 === 0 && num % 3 === 0) {
    console.log("fizz buzz");
  } else if (num % 5 === 0) {
    console.log("buzz");
  } else if (num % 3 === 0) {
    console.log("fizz");
  } else {
    console.log("none");
  }
};

frizzBuzz(numUser);

// frizzBuzz(3);
// frizzBuzz(5);
// frizzBuzz(15);
// frizzBuzz(22);
