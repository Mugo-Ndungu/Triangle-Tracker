// var triangle = [];


function results() {
  var flength = parseFloat(document.getElementById('firstside').value);
  var slength = parseFloat(document.getElementById('secondside').value);
  var tlength = parseFloat(document.getElementById('thirdside').value);
  var resul = document.querySelector("#para");

  if ((flength + slength <= tlength) || (slength + tlength <= flength) || (tlength + flength <= slength)) {
    resul.innerHTML = "Thats not a Triangle. Cheers!";
  } else if (flength === slength && slength === tlength) {
    resul.innerHTML = "Thats an Equilateral Triangle. Cheers!";
  } else if (flength === slength || slength === tlength || tlength === flength) {
    resul.innerHTML = "Thats an Isosceles Triangle. Cheers!";
  } else {
    resul.innerHTML = "Thats a Scalene Triangle. Cheers!";
  }
}

// function test(){
//   var flength = document.getElementById('firstside');
//   alert(flength);
//
// }
