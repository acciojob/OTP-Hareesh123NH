//your JS code here. If required.

const inputs=document.querySelectorAll(".code");
inputs.forEach((input,i)=>{
    input.addEventListener("keydown",(e)=>{
        if(e.key<=9 && e.key>=0 && i<inputs.length){
			setTimeout(()=>{
				 inputs[i+1].focus();
			},100);
        }
    })
    input.addEventListener("keydown",(e)=>{
        if(e.key==="Backspace" && input.value==='' && i>0){
            inputs[i-1].focus();
        }
    })
})
