window.addEventListener("scroll",(e)=>{
    const navbar = document.querySelector(".navbar")
    const nav = document.querySelector(".navbar-nav")
    // console.log(window.pageYOffset);
    if (window.scrollY === 0) {
        navbar.classList.remove('bg-dark')
        nav.classList.remove('navbar-nav-scroll')

    } else {
        navbar.classList.add('bg-dark')
        nav.classList.add("navbar-nav-scroll")
    }


})


const $poratofolio = document.querySelector(".portafolio");
const $modalImgPortafolio = document.querySelector(".img-modal-js");
const $card = document.querySelector(".plus");

const tituloModal = document.querySelector(".text-modal")
const parrafoModal = document.querySelector(".parrafo-modal")

$poratofolio.addEventListener('click', (e)=>{
    
    
    if(e.target.classList.contains("img-btn-modal-js")){
        // SRC
       let ulrImg = e.target.attributes[0].nodeValue;
       // ADD modal
       $modalImgPortafolio.src = ulrImg;

       let textosTitulo = ["Client: Threads", "Client: Explore","Client: Finish.","Lines.","Client: Southwest.","Client: Window"];

       let textosParrafoModal = ["Category: Illustration","Category: Graphic Design","Category: Identity","Category: Branding", "Category: Website Design","Category: Photography"];




       if(ulrImg == "./img/portfolio/1.jpg"){
           tituloModal.textContent = textosTitulo[0]
           parrafoModal.textContent = textosParrafoModal[0]
       }
       else if(ulrImg == "./img/portfolio/2.jpg"){
        tituloModal.textContent = textosTitulo[1]
        parrafoModal.textContent = textosParrafoModal[1]
       }
       else if(ulrImg == "./img/portfolio/3.jpg"){
        tituloModal.textContent = textosTitulo[2]
        parrafoModal.textContent = textosParrafoModal[2]
       }
       else if(ulrImg == "./img/portfolio/4.jpg"){
        tituloModal.textContent = textosTitulo[3]
        parrafoModal.textContent = textosParrafoModal[3]
       }
       else if(ulrImg == "./img/portfolio/5.jpg"){
        tituloModal.textContent = textosTitulo[4]
        parrafoModal.textContent = textosParrafoModal[4]
       }
       else if(ulrImg == "./img/portfolio/6.jpg"){
        tituloModal.textContent = textosTitulo[5]
        parrafoModal.textContent = textosParrafoModal[5]
       }

    }
})




const contact = document.querySelector(".contact")

contact.addEventListener("keyup",() =>{
    let textArea = document.getElementById("floatingTextarea")
    
    const $formulario = document.querySelectorAll(".contact input")
    let inputName = $formulario[0].value
    let inputEmail = $formulario[1].value
    let inputTel = $formulario[2].value
    let message = textArea.value
    
    const submitForm = document.querySelector(".contact .btn-contact")
    if(inputName > "" && inputEmail > "" && inputTel > "" && message > "" ){
        submitForm.removeAttribute("disabled")
        
    }
    
    

    else{
        submitForm.setAttribute("disabled","true")
    }

})