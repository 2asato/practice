let b = document.getElementById('btn5');
// sets b to btn5
let btnArray = [1, 2, 3, 6, 9, 8, 7, 4];
// array for order of buttons

b.onclick = function(){
  // when b is clicked
    btnArray.unshift(btnArray.pop());
    // the last btn in array is popped out and placed at beginning of array
    document.getElementById('btn1').innerHTML = btnArray[0];
    document.getElementById('btn2').innerHTML = btnArray[1];
    document.getElementById('btn3').innerHTML = btnArray[2];
    document.getElementById('btn6').innerHTML = btnArray[3];
    document.getElementById('btn9').innerHTML = btnArray[4];
    document.getElementById('btn8').innerHTML = btnArray[5];
    document.getElementById('btn7').innerHTML = btnArray[6];
    document.getElementById('btn4').innerHTML = btnArray[7];
}
