console.log("Start på program");

var velkomst = "Hej!";
var svar;

alert(velkomst);
svar = prompt("Indstast " + " 'JA' " + "for at komme ind på siden");
svar = svar.toUpperCase();

if(svar == "JA"){
    alert("Velkommen!");
} else{
    close();
}

console.log("Slut på program");
