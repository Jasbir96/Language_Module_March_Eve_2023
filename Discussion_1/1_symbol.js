// Data types : 
// primitive : number -> 64 bit , string, boolean,undefined , null
// new Types : BigInt , symbol

// Non primitives : Arrays, objects ,functions
// collection of key value pair
// ->  value -> any valid js type
// -> key : string , number 
// let obj = {
//     "name": "Steve",
//     "lastName": "rogers",
//     "isAvenger": true,
    
// }
// obj[1]="hello";
// console.log("1", obj[1]);
// obj["1"]="bye";
// console.log("1", obj[1]);
// console.log("1", obj["1"]);

//  object can only have unique strings as keys ->
// obj["name"]="loki"; 
// console.log("1", obj["name"]);

// when you don't want to update any of the existing keys

// symbol ->  symbol is used to create unique primitives 

// let  sym1= Symbol("id1");
// let sym2=Symbol("id2");
// console.log("result : ",sym1==sym2);
// console.log(sym1,sym2);

let obj = {
    "name": "Steve",
    "lastName": "rogers",
    "isAvenger": true,

}

let sym1=Symbol("name");
obj[sym1]="loki";
let sym2=Symbol("name");
obj[sym2]="Natasha";


// console.log(obj["name"]);
// console.log(obj[sym1]);
// console.log(obj[sym2]);
// console.log(Object.keys(obj));
console.log(Object.getOwnPropertySymbols(obj));




