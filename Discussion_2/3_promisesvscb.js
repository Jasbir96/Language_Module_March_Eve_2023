const fs = require("fs");

// console.log("before");
// //  buffer -> hexadecimal values 
//  inversion of control
// fs.readFile("./f1.txt", cb)
// function cb(err, data) {
//     if (err) {
//         console.log("error", err);
//     } else {
//         console.log("data", data);
//     }
// }
// console.log("After");
console.log("before");
const promise = fs.promises.readFile("./f1.txt");

// promise.then(function(data){
//     console.log("data", data);
// })

// promises.catch(function(err){
//     console.log("error", err);
// })


//  async await -> syntax sugar  on then catch 
(async function () {
    try {
        let data = await promise;
        console.log("data", data);
    } catch (err) {
        console.log("error", err);
    }
})();

console.log("after");

// your inversion control is solved 
// microtask task queue -> higher priority then cb queue

//  promises can be resolved or rejected once in the life time after that there 
// state could not changed
//  cb can be called multiple times
