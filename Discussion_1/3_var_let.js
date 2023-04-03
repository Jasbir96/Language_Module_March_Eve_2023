// var a = 10;
// console.log("line number 2", a);
// function fn() {
//     console.log("line number 4", a);
//     var a = 20;
//     a++;
//     console.log("line number 7", a);
//     if (a) {
//        var a = 30;
//         a++;
//         console.log("line number 11", a);
//     }
//     console.log("line number 13", a);
// }
// fn();
// console.log("line number 2", a);


//  function is called -> memory allocation is done 

//  var -> function scope , var can be redeclared;

// var a=10;
// var a=20;
// console.log("line number 25",a);

// let -> block scope , redeclare a let variable in same scope 


let a = 10;
console.log("line number 2", a); //-> 10
function fn() {
    console.log("line number 4", a);
    let a = 20;
    a++;
    console.log("line number 7", a);
    if (a) {
        let a = 30;
        a++;
        console.log("line number 11", a);
    }
    console.log("line number 13", a);
}
fn();

console.log("line number 2", a);

//  you cannot access variables declared using let before it's declaration -> temporal dead zone[TDZ]
// hositing
// console.log("val in a", a);
// let a;
// console.log("val in a",a);
// a=10;
// console.log("val in a",a);

