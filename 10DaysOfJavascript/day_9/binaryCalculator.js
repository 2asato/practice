// inserts 0s into 'res' box
document.getElementById('btn0').addEventListener('click', function() {
  document.getElementById('res').insertAdjacentHTML('beforeend', '0');
});

// inserts 1s into 'res' box
document.getElementById('btn1').addEventListener('click', function() {
  document.getElementById('res').insertAdjacentHTML('beforeend', '1')
});

// clears 'res' box
document.getElementById('btnClr').onclick = function()
{
    (document.getElementById('res').innerHTML) = "";
};

function action(e) {
  let btn = e.target
  /* Get the clicked element's innerHTML */
  document.getElementById('res').insertAdjacentHTML('beforeend', btn.innerHTML);
}

/* Set each button to call action(e) when clicked */
document.getElementById('btnSum').onclick = action;
document.getElementById('btnSub').onclick = action;
document.getElementById('btnMul').onclick = action;
document.getElementById('btnDiv').onclick = action;
