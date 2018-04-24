// https://www.hackerrank.com/challenges/js10-create-a-button

let clickMeButton = document.createElement('button');
// creates button
clickMeButton.id = ('btn');
// creates buttons id
clickMeButton.innerHTML = 0;
// sets buttons inner text
document.body.appendChild(clickMeButton);
// appends button to html

clickMeButton.addEventListener("click",function() {
  let current_value = this.innerHTML;
  // sets buttons text to current_value
  this.innerHTML = parseInt(current_value)+1;
  // current_value text increases by 1 every click
});
