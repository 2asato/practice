let b = document.getElementById('btn5');
let btnArray = [1, 2, 3, 6, 9, 8, 7, 4];

b.onclick = function(){
    btnArray.unshift(btnArray.pop());
    document.getElementById('btn1').innerHTML = btnArray[0];
    document.getElementById('btn2').innerHTML = btnArray[1];
    document.getElementById('btn3').innerHTML = btnArray[2];
    document.getElementById('btn6').innerHTML = btnArray[3];
    document.getElementById('btn9').innerHTML = btnArray[4];
    document.getElementById('btn8').innerHTML = btnArray[5];
    document.getElementById('btn7').innerHTML = btnArray[6];
    document.getElementById('btn4').innerHTML = btnArray[7];
}
