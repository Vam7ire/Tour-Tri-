document.getElementById("usdBtn").onclick = function () {
    currencyChangeBody.style.display = "block";
}

document.getElementById("usdClose").onclick = function () {
    currencyChangeBody.style.display = "none";
}

document.getElementById("euroBtn").onclick = function () {
    currencyChangeBody1.style.display = "block";
}

document.getElementById("euroClose").onclick = function () {
    currencyChangeBody1.style.display = "none";
}

document.getElementById("dirhamBtn").onclick = function () {
    currencyChangeBody2.style.display = "block";
}

document.getElementById("dirhamClose").onclick = function () {
    currencyChangeBody2.style.display = "none";
}

const Dirham = 35.91;
const Usd = 131.88;
const Euro = 141.60;

var myUsd = document.getElementById("myUsd").value;
var myEuro = document.getElementById("myEuro").value;
var myDihram = document.getElementById("myDihram").value;

document.getElementById("usdChange").onclick = function(){
    document.getElementById("usdChangedValue").innerHTML = Euro;
}

document.getElementById("dirhamClose").onclick = function(){
    document.getElementById("euroChangedValue").innerHTML = "my value";
}


