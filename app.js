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
   
    let ueExpense=parseInt(userInput, 10)
  
    expense=expense+ueExpense
    
    
    obj.desc=userDesc
    obj.amt=ueExpense

    all.push(obj)
  
 total.textContent="The Total Expense is :"+ expense

}


btn.addEventListener("click",btnListen)