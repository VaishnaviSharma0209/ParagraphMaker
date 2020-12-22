var sentence=[];
function para() {
    var display=[];
for (var j=1;j<=6;j++) {
    var display= document.getElementById(j).value;
    console.log(display);
    sentence.push(display);
}
var fullstop=sentence.join(".");
document.getElementById("paragraph").innerHTML=fullstop;
}
