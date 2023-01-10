const input = document.getElementById("input")
const convertBtn = document.getElementById("convert-btn")
const lengthCont = document.querySelector(".length")
const volumeCont = document.querySelector(".volume")
const massCont = document.querySelector(".mass")
let length = document.querySelector(".length-result")
let volume = document.querySelector(".volume-result")
let mass = document.querySelector(".mass-result")

convertBtn.addEventListener('click', function() {
    let value = input.value
    length.textContent = `${value} metros = ${getLengthFeet()} pies | ${value} pies = ${getLengthMeters()} metros`
    volume.textContent = `${value} litros = ${getVolumeLiters()} galones | ${value} galones = ${getVolumeGallons()} litros`
    mass.textContent = `${value} kilos = ${getMassKg()} libras | ${value} libras = ${getMassPounds()} kilos`
})

//
function getLengthFeet() {
    let lengthValueFeet = input.value
    return Math.floor(lengthValueFeet * 3.281)
}

function getLengthMeters() {
    let lengthValueMeters = input.value
    return Math.floor(lengthValueMeters * 0.3048)
}
//

//
function getVolumeLiters() {
    let volumeValueLiters = input.value
    return Math.floor(volumeValueLiters * 0.264)
}

function getVolumeGallons() {
    let volumeValueGallons = input.value
    return Math.floor(volumeValueGallons * 0.219969)
}
//

//
function getMassKg() {
    let massValueKg = input.value
    return Math.floor(massValueKg * 2.204)
}

function getMassPounds() {
    let massValuePounds = input.value
    return Math.floor(massValuePounds * 0.453592)
}