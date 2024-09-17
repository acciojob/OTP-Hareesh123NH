//your JS code here. If required.

const inputs=document.querySelectorAll(".code");
inputs.forEach((input,i)=>{
    input.addEventListener("input",()=>{
        if(input.value.length===1 && i<inputs.length){
            inputs[i+1].focus();
        }
    })
    input.addEventListener("keydown",(e)=>{
        if(e.key==="Backspace" && input.value==='' && i>0){
            inputs[i-1].focus();
        }
    })
})
