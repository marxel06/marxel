const selectSwitch = document.getElementById("switch")

selectSwitch.addEventListener("click",(e)=>{
    selectSwitch.classList.toggle("switch-active")
    const cardText = document.querySelectorAll(".textCard")

    if(selectSwitch.classList[1] == "switch-active"){
        const spanPrice = document.querySelectorAll(".span-price")
        cardText.forEach(element => {
            const spanYearly = document.querySelectorAll(".span-yearly")

            spanPrice[0].innerHTML = "$90/yr"
            spanPrice[1].innerHTML = "$120/yr"
            spanPrice[2].innerHTML = "$150/yr"

            const yearly = document.getElementById("yearly")
            const monthly = document.getElementById("monthly")

            yearly.style.color = "#052755"
            monthly.style.color = "#C1C2C7"
            



            spanYearly.forEach(spanText => {
                spanText.style.display = "block"


            });
            
        });
    }else{
        const spanYearly = document.querySelectorAll(".span-yearly")
        const spanPrice = document.querySelectorAll(".span-price")
            spanPrice[0].innerHTML = "$9/mo"
            spanPrice[1].innerHTML = "$12/mo"
            spanPrice[2].innerHTML = "$15/mo"

            const yearly = document.getElementById("yearly")
            const monthly = document.getElementById("monthly")

            yearly.style.color = "#C1C2C7"
            monthly.style.color = "#052755"



            spanYearly.forEach(spanText => {
                spanText.style.display = "none"
            });
    }
})