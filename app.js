const input= document.querySelector("#amount");
const btn = document.querySelector("#btn");
const total = document.querySelector("#total");
const desc= document.querySelector("#desc");
let expense=0;
let all=[]

function btnListen(){
    let obj={}
    let userInput=input.value
    let userDesc=desc.value
    console.log({userInput})
    let uexpense=parseInt(userInput,10)
    console.log({uexpense})
    console.log({userDesc})
     expense=expense+userInput
    console.log({expense})
    
    obj.desc=userDesc
    obj.amt=userInput

    all.push(obj)
    console.log({all})
console.log("The Total Expense is {$expense}")

}


btn.addEventListener("click",btnListen)