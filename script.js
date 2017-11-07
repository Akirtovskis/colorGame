let numSquares = 6;
let colors = [];
let pickedColor;

let squares = document.querySelectorAll(".square");
let colorDisplay = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode")

init();

function init(){

  setUpModeButtons();
  setUpSquares();
  reset();
}

function setUpModeButtons(){
  for (var i=0; i<modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      if(this.textContent==="Easy"){
        numSquares=3;
      } else {
        numSquares=6;
      }
      reset();
    });
  }
}

function setUpSquares(){
  for(i=0;i<squares.length;i++){
    let color = colors[i];
    squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener("click", function(){
      let clickedColor = this.style.backgroundColor;

      if(clickedColor===pickedColor){
        messageDisplay.textContent="Correct";
        resetButton.textContent="Play again?"
        changeColor(clickedColor);
        h1.style.backgroundColor=clickedColor;
      } else {
        this.style.backgroundColor="#232323";
        messageDisplay.textContent="Try again";
      }
    });
  }
}

function reset(){
  colors=generateRandomColors(numSquares);
  pickedColor=pickColor();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors"
  messageDisplay.textContent = " ";
  for(i=0;i<squares.length;i++){
    squares[i].style.display="block";
    if(colors[i]){
    squares[i].style.backgroundColor=colors[i]}
    else {
    squares[i].style.display="none";
    }
  };

  h1.style.backgroundColor="steelblue";
}


resetButton.addEventListener("click", function(){
reset();
});



function changeColor(color){
  for(i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=color;

  }
}

function pickColor(){
  let random = Math.floor(Math.random()*colors.length);
  return colors[random];
}

function generateRandomColors(num){
  let arr = [];
  for(i=0;i<num;i++){
    arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
  let red = Math.floor(Math.random()*256);
  let green = Math.floor(Math.random()*256);
  let blue = Math.floor(Math.random()*256);

  return "rgb("+red+", "+green+", "+blue+")";
}
