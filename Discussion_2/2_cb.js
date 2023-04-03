
//  is js single threaded ?? -> yes it is single threaded 
// is nodejs single threaded -> yes it is single threaded 
// how does it achive asynchronous behaviour ?? -> because of event loop in nodejs/ browser
// let a = true;
// console.log("Before");
// setTimeout(() => {
//     a = false;
//     console.log("I broke the while loop");
// }, 1000);
// console.log("After");
// // while (a) {

// // }


// console.log("Before");
// const cb2 = () => {
//     console.log("set timeout 1");
//     while (1) {
//     }
// }
// const cb1 = () => console.log("hello");

// setTimeout(cb2, 1000)

// setTimeout(cb1, 2000)




// console.log("After");



//  callback hell -> bad about cbs
    // trust issues ->
    // inversion of control->
    // nested callback  -> nested promises  
       
         