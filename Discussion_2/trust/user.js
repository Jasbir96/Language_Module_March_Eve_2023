let {runMlalgo, runPMAlgo}=require("./lib.js");

let price=20;
let amount=100;
console.log("before");

// runMlalgo(amount,deductAmount);
let promise=runPMAlgo(amount);
promise.then(function(){
    amount = amount - price;
    console.log(amount, "is left in your wallet")
})

function deductAmount() {
amount=amount-price;
console.log(amount ,"is left in your wallet")
}
console.log("after");
