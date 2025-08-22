
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")


convertBtn.addEventListener("click", function () {
    const errorEl = document.getElementById("error")
    let inputEl = document.getElementById("input-el").value
    let length = `
    ${inputEl} meters = ${convertToFeet(inputEl)} feet | 
    ${inputEl} feet = ${convertToMeter(inputEl)} meters
    `
    let volume = `
    ${inputEl} liters = ${convertToLiter(inputEl)} gallons | 
    ${inputEl} gallons = ${convertToGallon(inputEl)} liters
    `
    let mass = `
    ${inputEl} kilos = ${convertToKilogram(inputEl)} pounds | 
    ${inputEl} pounds = ${convertToPound(inputEl)} kilos
    `
    if( inputEl <= 0){
        errorEl.textContent = "Please enter a valid input"
    } else {
        errorEl.textContent = ""
        lengthEl.textContent = length
        volumeEl.textContent = volume
        massEl.textContent = mass
    }
   
})

//======= Length Conversion =======
function convertToMeter (num) {
    let calculate = num * 0.3048
    return calculate.toFixed(3)
}

function convertToFeet (num) {
    let calculate = num * 3.28084
    return calculate.toFixed(3)
}

//======= Volume Conversion ======
function convertToLiter (num) {
    let liters = num * 3.785411784
    return liters.toFixed(3)
}

function convertToGallon (num) {
    let gallon = num * 0.264172052
    return gallon.toFixed(3)
}

//======== Mass Conversion========
function convertToKilogram (num) {
    let kilogram = num * 0.45359237
    return kilogram.toFixed(3)
}

function convertToPound (num) {
    let pound = num * 2.20462262
    return pound.toFixed(3)
}
