
const first_red_pawn = document.querySelector('.board .first_red_pawn:nth-child(5)')
first_red_pawn.style.gridRow = "";
first_red_pawn.style.gridColumn = "";

// const second_red_pawn = document.querySelector('.board .second_red_pawn:nth-child(6)')
// second_red_pawn.style.gridRow = "";
// second_red_pawn.style.gridColumn = "";

 const first_yellow_pawn = document.querySelector('.board .first_yellow_pawn:nth-child(7)')
first_yellow_pawn.style.gridRow = "";
first_yellow_pawn.style.gridColumn ;

// const second_yellow_pawn = document.querySelector('.board .second_yellow_pawn:nth-child(8)')
// second_yellow_pawn.style.gridRow = "";
// second_yellow_pawn.style.gridColumn = "";


 


const yellow_button = document.getElementById('yellow_button');
yellow_button.addEventListener('click', yellow_dice_rolled = () => {
  const dice_number = Math.ceil(Math.random() * 6);
  for (let i = 0; i < dice_number; i++) {
    const textNode = document.createTextNode('.'); // Change this to the text you want to add
    yellow_button.appendChild(textNode);
  }
  yellow_button.textContent = dice_number;
  yellow_button.classList.add('rotate');
  setTimeout(() => {
    yellow_button.classList.remove('rotate');
  }, 300)
  
  if (dice_number == 5){
    first_yellow_pawn.style.gridRow = 8;  
     
  }
  else if(first_yellow_pawn.style.gridRow == 8){
    first_yellow_pawn.style.gridColumn = 1
  }
  console.log(dice_number); 
})


const red_button = document.getElementById('red_button');
red_button.addEventListener('click', red_dice_rolled = () => {
  dice_number = Math.ceil(Math.random() * 6)
  for (let i = 0; i < dice_number; i++) {
    const textNode = document.createTextNode('.'); // Change this to the text you want to add
    red_button.appendChild(textNode);
  }
  red_button.textContent = dice_number;
  red_button.classList.add('rotate');
  setTimeout(() => {
    red_button.classList.remove('rotate');
  }, 300)
  
  if (dice_number == 5){
    first_red_pawn.style.gridRow = 10;
  }

  console.log(dice_number);
})
  






/*
class Toplay {
    
    constructor() {
      this.red_pawn = []
    }
}
*/