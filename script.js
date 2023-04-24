let decInput=document.getElementById("dec-input");
let binInput=document.getElementById("bin-input");
//let errorMsg=document.getElementById("sample-error");

decInput.addEventListener("input",()=>{
    let decValue=parseInt(decInput.value)
binInput.value=decValue.toString(2);
  
})
