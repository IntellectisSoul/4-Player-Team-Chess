// window.onload = init;
//Player 2 Black Side
document.getElementById('c12').innerHTML = "♜";
document.getElementById('j12').innerHTML = "♜";

document.getElementById('d12').innerHTML = "♞";
document.getElementById('i12').innerHTML = "♞";

document.getElementById('e12').innerHTML = "♝";
document.getElementById('h12').innerHTML = "♝";

document.getElementById('f12').innerHTML = "♛";
document.getElementById('g12').innerHTML = "♚";

setTimeout(2000);
{ lettr = ['c', 'd', 'e', 'f', 'g', 'h','i', 'j' ];
for (i=0; i < lettr.length; i++) {
x = (lettr[i] +11);
document.getElementById(x).innerHTML = "♟";
}
}

//Player 1 White Side
document.getElementById('c1').innerHTML = "♖";
document.getElementById('j1').innerHTML = "♖";

document.getElementById('d1').innerHTML = "♘";
document.getElementById('i1').innerHTML = "♘";

document.getElementById('e1').innerHTML = "♗";
document.getElementById('h1').innerHTML = "♗";

document.getElementById('f1').innerHTML = "♕";
document.getElementById('g1').innerHTML = "♔";

setTimeout(2000);
{ lettr = ['c', 'd', 'e', 'f', 'g', 'h','i', 'j' ];
for (i=0; i < lettr.length; i++) {
x = (lettr[i] +2);
document.getElementById(x).innerHTML = "♙";
}
}
// let x = document.getElementByID("c12");

// x.apendChild(♜);