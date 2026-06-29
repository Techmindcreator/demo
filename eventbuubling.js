const parent=document.getElementById("parent");
const Child=document.getElementById("child");
parent.addEventListener("click",()=>{
    console.log("parent called");
})
// Child.addEventListener("click",(event)=>{
//     console.log("Child is called")
//     event.stopPropagation();
// })
const ul=document.getElementById("ul");
ul.addEventListener("click",(event)=>{
console.log(event.target.innerText);
})