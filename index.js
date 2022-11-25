/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertor = document.querySelector(".converter")
const userInput= document.querySelector(".user-input")
const userNumber= document.querySelectorAll(".user-number")
const metersFeet= document.querySelector(".m-ft")
const FeetMeters= document.querySelector(".ft-m")
const litersGallon= document.querySelector(".l-gal")
const gallonLiters= document.querySelector(".gal-l")
const kilosPounds= document.querySelector(".kg-lb")
const poundsKilos= document.querySelector(".lb-kg")

convertor.addEventListener("click",()=>{
    if (!userInput.value || userInput.value>= 99) return
    userUnits(userInput.value)
    convertion(userInput.value, 3.281, metersFeet, FeetMeters)
    convertion(userInput.value, 0.264, litersGallon, gallonLiters)
    convertion(userInput.value, 2.204, kilosPounds, poundsKilos)
})

function userUnits(mainNumber){
    userNumber.forEach(number=>{
        number.textContent= mainNumber
    })
}


function convertion(mainNumber, formula, firstConv, secondConv){
    const first= mainNumber * formula
    firstConv.textContent= first.toFixed(3)

    const second= mainNumber / formula
    secondConv.textContent= second.toFixed(3)
}
