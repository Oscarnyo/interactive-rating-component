const submit = document.getElementById("btn-submit")
const ratingPage = document.querySelector(".container-1") 
const thankyouPage = document.querySelector(".container-2")
const radiobuttons = document.querySelectorAll(".form__radio-input")
const rate = document.getElementById("rate")
let ratingNum = 0

submit.addEventListener("click", function(){
    ratingPage.style.display = "none"
    thankyouPage.style.display = "block"
    rate.innerHTML = ratingNum
})

radiobuttons.forEach(function(btn){
    btn.addEventListener("change", function(e){
        ratingNum = e.target.value
    })
})