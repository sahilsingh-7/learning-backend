//commann js

// const randomNu = require('./util');
// const randomNumber2 = require('./util');
// // console.log(randomNu);
// console.log(typeof(randomNu));



//modulejs 
//import { randomNumber } from "./util.js"; // for single function we have to add curly braces too whenever not exporting as default
// import { randomNumber,sayMyName } from "./util.js"; //we can import all with funnctionns within the curly braces 
// console.log(randomNumber());
// console.log(sayMyName());

//export default 
import { sayMyName } from "./util.js";
import randomNumber from "./util.js";
console.log(randomNumber());
console.log(sayMyName());