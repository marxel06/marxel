const inputName = document.getElementById("inputName");
const inputEmail = document.getElementById("inputEmail");
const inputNumber = document.getElementById("inputNumber");
console.log(inputNumber);
const btnSubmit = document.getElementById("btn");

btnSubmit.addEventListener("click",(e)=>{

   if(inputName.value == "" && inputName.value.length =="0"){
      inputName.style.border = "1px solid red"
      alert(`Debe completar el campo: name`)
      e.setAttribute ("href","#")
      
   }
   if(inputEmail.value == "" && inputEmail.value.length == "0" ){
      inputEmail.style.border = "1px solid red"
      alert(`Debe completar el campo: Email`)
      btnSubmit.setAttribute("href","#")
   }
   if(inputNumber.value == "" && inputNumber.value.length == "0" ){
      inputNumber.style.border = "1px solid red"
      alert(`Debe completar el campo: Phone number`)
      btnSubmit.setAttribute("href","#")
   }else{
      inputName.style.border = "1px solid #E0DFE3";
      inputEmail.style.border = "1px solid #E0DFE3";
      inputNumber.style.border = "1px solid #E0DFE3";
      
      btnSubmit.setAttribute ("href","../step2.html")
   }
})

