
function outerFun() {
    console.log(arguments);
    let innerFun = ()=> {
        console.log(arguments);
    }
    innerFun("Hello", "Coder")
}
outerFun("Welcome", "to", "Scaler", "Academy"); 
// Here expected output is: [Arguments] 
// { '0': 'Welcome', '1': 'to', '2': 'Scaler', '3': 'Academy' } 
// [Arguments] { '0': 'Welcome', '1': 'to', '2': 'Scaler', '3': 'Academy' }

function fn(param1){
    console.log("param", param1);
}
fn("Hello");
fn()
