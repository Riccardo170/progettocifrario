function crittografia(){
var alfabeto ="abcdefghijklmnopqrstuvwxyz";
var testochiaro=document.getElementById("testochiaro").value;
var testocifrato="";
var testodecifrato="";
var chiave= document.getElementById("chiave").value;

console.log(testochiaro);
console.log((posizione + chiave) % 26);

for(var i=0; i<testochiaro.length;i++){
    var posizione= alfabeto.indexOf(testochiaro[i]);
    testocifrato +=alfabeto[(posizione + chiave) % 26];
}
document.getElementById("testoc").innerHTML=testocifrato;


for(var i=0; i<testochiaro.length;i++){
    var posizione = alfabeto.indexOf(testocifrato[i]);
    testodecifrato += alfabeto[(posizione - chiave + 26) % 26];
}

document.getElementById("testod").innerHTML=testodecifrato;
}