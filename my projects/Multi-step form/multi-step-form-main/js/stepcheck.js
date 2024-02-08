const checks = document.querySelectorAll(".btn-check")
const checkContainer = document.querySelectorAll(".selector-add-ons")

const changeBorder = () =>{

    checks[0].addEventListener("click",(e)=>{
        if(checks[0].checked == true){
            checkContainer[0].style.border = "1px solid #174A8B"
        }else{
            checkContainer[0].style.border = "1px solid #C1C2C7"
        }
    })
    checks[1].addEventListener("click",(e)=>{
        if(checks[1].checked == true){
            checkContainer[1].style.border = "1px solid #174A8B"
        }else{
            checkContainer[1].style.border = "1px solid #C1C2C7"
        }
    })
    checks[2].addEventListener("click",(e)=>{
        if(checks[2].checked == true){
            checkContainer[2].style.border = "1px solid #174A8B"
        }else{
            checkContainer[2].style.border = "1px solid #C1C2C7"
        }
    })
    
} 

changeBorder()