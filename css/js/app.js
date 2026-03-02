function calcularIMC(){
let peso=document.getElementById("peso").value;
let altura=document.getElementById("altura").value;

if(peso && altura){
let imc=(peso/(altura*altura)).toFixed(2);
document.getElementById("resultado").innerHTML="Tu IMC es "+imc;
}
}

function calcularCalorias(){
let peso=document.getElementById("peso").value;
let altura=document.getElementById("altura").value;
let edad=document.getElementById("edad").value;

if(peso && altura && edad){
let calorias=(10*peso)+(6.25*altura)-(5*edad)+5;
document.getElementById("resultado").innerHTML=
"Necesitas "+Math.round(calorias)+" calorías diarias";
}
}

function calcularProteina(){
let peso=document.getElementById("peso").value;
if(peso){
let proteina=(peso*1.8).toFixed(1);
document.getElementById("resultado").innerHTML=
"Necesitas "+proteina+"g de proteína diaria";
}
}
