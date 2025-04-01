const input = document.getElementById("input-el")

const Len = document.getElementById("len")

const Mass = document.getElementById("mass")

const Volume = document.getElementById("volume")

const btn = document.getElementById("convert-btn")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

const fixP = 3
//0 kilos = 0.000 pounds | 0 pounds = 0.000 kilos

const units = ["meters", "feet", "kilos", "pounds", "litres", "gallons"]

function toLen(baseP) {
    return (baseP * meterToFeet).toFixed(fixP)
}

function toMass(baseP) {
    return (baseP * kiloToPound).toFixed(fixP)
}

function toVolume(baseP) {
    return (baseP * literToGallon).toFixed(fixP)
}
function convert() {
    let baseP = input.value
    Len.textContent = `${baseP} ${units[0]} =  ${toLen(baseP)} ${units[1]}`
    Mass.textContent = `${baseP} ${units[2]} =  ${toMass(baseP)} ${units[3]}`
    Volume.textContent = `${baseP} ${units[4]} =  ${toVolume(baseP)} ${units[5]}`
}

btn.addEventListener("click", convert)