function cash_register() {
  var a, b, c, d, e, f, g, h, x;
  var a = document.getElementById("text").value;
  var b = document.getElementById("text1").value;
  var c = document.getElementById("text2").value;
  var d = document.getElementById("text3").value;
  var e = document.getElementById("text4").value;
  var f = document.getElementById("text5").value;
  var g = document.getElementById("text6").value;
  var h = document.getElementById("text7").value;
  
  var x = (a*60)+(b*80)+(c*40)+(d*20)+(e*90)+(f*120)+(g*55)+(h*30);

    document.getElementById("tab").innerHTML = 'Total of your purchase is:<big> $' + x + '<big>';
    
}
