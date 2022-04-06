function crittografia(){
var alfabeto ="abcdefghijklmnopqrstuvwxyz";
var testochiaro=document.getElementById("testochiaro").value;
testochiaro=testochiaro.replaceAll(" ","");//metodo per rimuove gli spazi
var testocifrato="";
var testodecifrato="";
var chiavi = document.getElementById("chiavi").value;
const array=chiavi.split(";");
var ichiave=0;

for(var i=0; i<testochiaro.length;i++){
    var posizione= alfabeto.indexOf(testochiaro[i]);
    testocifrato +=alfabeto[(posizione + parseInt(array[ichiave])) % 26];
    ichiave=(ichiave+1) % array.length;
}
document.getElementById("testoc").innerHTML=testocifrato;

ichiave=0;

for(var i=0; i<testocifrato.length;i++){
    var posizione= alfabeto.indexOf(testocifrato[i]);
    testodecifrato +=alfabeto[(posizione - parseInt(array[ichiave])+ 26 ) % 26];
    console.log((posizione - parseInt(array[ichiave])+ 26 ) % 26);
    ichiave=(ichiave+1) % array.length;
    
}

document.getElementById("testod").innerHTML=testodecifrato;
}