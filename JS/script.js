// var triangle = [];
var flength = parseInt(document.getElementById('firstside').value);
var slength = parseInt(document.getElementById('firstside').value);
var tlength = parseInt(document.getElementById('firstside').value);
var resul = document.querySelector("#para");

function results() {
  // triangle.push(flength);
  // triangle.push(slength);
  // triangle.push(tlength);
  if (isNaN(flength) && isNaN(slength) && isNaN(tlength)) {
    if ((flength + slength) < tlength || (slength + tlength) < flength || (tlength + flength) < slength) {
      resul.innerHTML = "Thats not a Triangle. Cheers!";
    } else if (flength === slength && slength === tlength) {
      resul.innerHTML = "Thats an Equilateral Triangle. Cheers!";
    } else if (flength === slength || slength === tlength || tlength === flength) {
      resul.innerHTML = "Thats an Isosceles Triangle. Cheers!";
    } else if (flength != slength && slength != tlength && tlength != flength) {
      resul.innerHTML = "Thats a Scalene Triangle. Cheers!";
    }
  }
}



// function test(){
//   var flength = document.getElementById('firstside');
//   alert(flength);
//
// }
