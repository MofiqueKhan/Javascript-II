console.log("hello world...!!");

//                  ----->>>>> Switch Statement <<<<<<-------

//The switch statement is used to perform different actions based on different conditions.

// let day = 0;

// switch (day) {
//   case 0:
//     console.log("sunday");
//     break;
//   case 1:
//     console.log("monday");
//     break;
//     case 2:
//     console.log("tuesday");
//     break;
//     case 3:
//     console.log("wednesday");
//     break;
//     case 4:
//     console.log("thursday");
//     break;
//     case 5:
//     console.log("friday");
//     break;
//     case 6:
//     console.log("saturday");
//     break;
//     default: "try withhin number 0-6"
// }

let fruit = "mango";

switch (fruit) {
  case "banana":
    console.log("banana is 40 rupees for per KG.");
    break;
  case "papaya":
    console.log("papaya is 60 rupees for per KG.");
    break;
  case "mango":
  case "strawberry":
    console.log(`${fruit} is 120 rupees for per KG.`);
    break;
  default:
    console.log(`${fruit} is out of stock.`);
}
