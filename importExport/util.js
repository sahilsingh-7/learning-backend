// function randomNumber(){
//     return Math.floor(Math.random() *100 );
// }
// function randomNumber2(){
//     return Math.floor(Math.random() *100 );
// }
// // module.exports = randomNumber; this is used to send single function 
// module.exports = {randomNumber,randomNumber2}; // for sennding multiple functions



//module js

// function randomNumber(){
//     return Math.floor(Math.random() * 100 );
// }
// function sayMyName(){
//     return "sahil singh";
// }

//  export {randomNumber,sayMyName}; //that's one way of exporting all functions 


 //other way of exporting functions

//  export function randomNumber(){
//     return Math.floor(Math.random() * 100 );
// }
// export function sayMyName(){
//     return "sahil singh";
// }


//export default

function randomNumber(){
   return Math.floor(Math.random() * 100 );
}
function sayMyName(){
   return "sahil singh";
}
export {sayMyName};
export default randomNumber; // it is used to export only one function. for single file only one default export is allowed 

