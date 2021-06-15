function calculate(){ 
var r, h, valume ; 
var r = document.getElementById("input1").value; 
var h = document.getElementById("input2").value;
var volume = Math.trunc(3.14*r*r*h); 
document.getElementById("input").innerHTML = 'The cylinder valume is: ' + volume;
}
function operations(){
var h, r, v
var h = prompt('Enter the height of the Cylinder in "cm"')
var r = prompt('Enter the Radio of the Cylinder in "cm"')
var v = Math.trunc(3.14*(r**2)*h)
document.getElementById("input1").innerHTML = '<strong><big> V = π*r^2*h </big></strong><br>';
document.getElementById("input").innerHTML = 'Result V='+ v;
}


