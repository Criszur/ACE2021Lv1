function myFunction() {
  var x = document.getElementById("input1").value;
  var y = document.getElementById("input2").value;
  var z = document.getElementById("input3").value;
  var w = document.getElementById("input4").value;
  var future = 'You are an ' + w + ' living in ' + z + ', you are also married with ' + y + ' and have ' + x
  + ' Childrens.';
  document.getElementById("fortune").innerHTML = future;
  var down= ' '; 
  var up = ' ';
  document.getElementById("teller").innerHTML = up ;
  document.getElementById("play").innerHTML = down ;
}
