// inserts 0s into 'res' box
document.getElementById('btn0').addEventListener('click', function() {
  document.getElementById('res').insertAdjacentHTML('beforeend', '0');
});

// inserts 1s into 'res' box
document.getElementById('btn1').addEventListener('click', function() {
  document.getElementById('res').insertAdjacentHTML('beforeend', '1')
});
