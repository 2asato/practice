// https://www.hackerrank.com/challenges/js10-create-a-button

let clickMeButton = document.createElement('button');
clickMeButton.id = ('btn');
clickMeButton.innerHTML = 0;
document.body.appendChild(clickMeButton);

clickMeButton.addEventListener("click",function() {
  let current_value = this.innerHTML;
  this.innerHTML = parseInt(current_value)+1;
});
