let nav = document.querySelector(".nav-menu");
let menuMobile = document.querySelector(".menu-mobile");

menuMobile.addEventListener("click",(e)=>{
    nav.classList.toggle("nav-menu-active")
})


// let buscador = document.querySelector(".nav-menu");

// buscador.addEventListener("click",(e)=>{
//     e = buscador;
//     if(e.classList.toggle){
//         nav.classList.remove("nav-menu-active")
//     }
// })
