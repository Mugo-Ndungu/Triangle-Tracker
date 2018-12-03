<<<<<<< HEAD


function results() {
  var triangle = [];
  var flength = parseInt(document.getElementById('firstside').value);
  var slength = parseInt(document.getElementById('firstside').value);
  var tlength = parseInt(document.getElementById('firstside').value);
  var resul = document.querySelector("#para");


  triangle.push(flength);
  triangle.push(slength);
  triangle.push(tlength);

  if (flength === NaN || slength === NaN || tlength === NaN) {
    resul.innerHTML="Alert the Input requires a Number";
  } else if (flength == slength && slength == tlength) {
    resul.innerHTML="Thats an Equilateral Triangle. Cheers!" ;
  } else if (flength == slength || slength == tlength || tlength == flength) {
    resul.innerHTML="Thats an Isosceles Triangle. Cheers!" ;
  } else if (flength != slength && slength != tlength && tlength != flength) {
    resul.innerHTML="Thats a Scalene Triangle. Cheers!" ;
  } else if (flength + slength>tlength || slength + tlength>flength || tlength + flength > slength){
    resul.innerHTML="Thats not a Triangle. Cheers!" ;
  }
}
//
=======
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

>>>>>>> d01643fbd79d8a3872e07003239e77616618c6c8
// function test(){
//   var flength = document.getElementById('firstside');
//   alert(flength);
//
// }
