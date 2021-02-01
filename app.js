const input= document.querySelector("#amount");
const btn = document.querySelector("#btn");
const total = document.querySelector("#total");
const desc= document.querySelector("#desc");
const data=document.querySelector("#output")
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
  
 total.textContent=`The Total Expense is :${ expense}`

 data1=all[0]
 data2=all[1]
 
 data3=`Expense:${data1.desc} :: amount:${data1.amt}`
 
 data4=`Expense:${data2.desc} :: amount:${data2.amt}`
data.innerText=<li> {data3+data4}</li>
}


btn.addEventListener("click",btnListen)