console.log("hello World");

// continue in loop

// The continue statement "jumps over" one iteration in the loop.The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.

// for (let i = 1; i <= 10; i++) {
//   if (i == 3) {
//     continue;
//   }
//   console.log(i);
// }

// break in loop

// The break statement "jumps out" of a loop.

// for (let i = 1; i <= 10; i++) {
//     if (i == 7) {
//       break;
//     }
//     console.log(i);
//   }

// nested loop

//it is made up of more than one for loop one nested inside of the other.

for (let i = 1; i <= 10; i++) {
  console.log(i);
  for (let j = 1; j < 2; j++) {
    console.log("mofique");
  }
}
