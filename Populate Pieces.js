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
{ let lettr = ['c', 'd', 'e', 'f', 'g', 'h','i', 'j' ];
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


{let  lettr = ['c', 'd', 'e', 'f', 'g', 'h','i', 'j' ];
for (i=0; i < lettr.length; i++) {
x = (lettr[i] +2);
document.getElementById(x).innerHTML = "♙";
}
}

//Player 3 Black Side
document.getElementById('a10').innerHTML = "♜";
document.getElementById('a3').innerHTML = "♜";

document.getElementById('a9').innerHTML = "♞";
document.getElementById('a4').innerHTML = "♞";

document.getElementById('a8').innerHTML = "♝";
document.getElementById('a5').innerHTML = "♝";

document.getElementById('a7').innerHTML = "♛";
document.getElementById('a6').innerHTML = "♚";

{ let no = [10, 9, 8, 7, 6, 5,4,3];
    for (i=0; i < no.length; i++) {
    x = ('b'+no[i]);
    console.log(x);
    document.getElementById(x).innerHTML = "♟";
    }
    }

//Player 4 White Side
document.getElementById('l10').innerHTML = "♖";
document.getElementById('l3').innerHTML = "♖";

document.getElementById('l9').innerHTML = "♘";
document.getElementById('l4').innerHTML = "♘";

document.getElementById('l8').innerHTML = "♗";
document.getElementById('l5').innerHTML = "♗";

document.getElementById('l7').innerHTML = "♕";
document.getElementById('l6').innerHTML = "♔";


{ let no = [10, 9, 8, 7, 6, 5,4,3];
for (i=0; i < no.length; i++) {
x = ('k'+no[i]);
console.log(x);
document.getElementById(x).innerHTML = "♙";
}
}
// let x = document.getElementByID("c12");

// x.apendChild(♜);