
const first_red_pawn = document.querySelector('.board .first_red_pawn:nth-child(5)')
first_red_pawn.style.gridRow = "";
first_red_pawn.style.gridColumn = "";

// const second_red_pawn = document.querySelector('.board .second_red_pawn:nth-child(6)')
// second_red_pawn.style.gridRow = "";
// second_red_pawn.style.gridColumn = "";

 const first_yellow_pawn = document.querySelector('.board .first_yellow_pawn:nth-child(7)')
first_yellow_pawn.style.gridRow = "";
first_yellow_pawn.style.gridColumn = "";

// const second_yellow_pawn = document.querySelector('.board .second_yellow_pawn:nth-child(8)')
// second_yellow_pawn.style.gridRow = "";
// second_yellow_pawn.style.gridColumn = "";



const yellow_button = document.getElementById('yellow_button')
yellow_button.addEventListener('click', yellow_dice_rolled = () => {

  dice_number = Math.floor(Math.random() * 7)
  if ( dice_number > 0 && dice_number == 5){
      first_yellow_pawn.style.gridRow = "8";   
  }
  console.log(dice_number);
})


const red_button = document.getElementById('red_button')
red_button.addEventListener('click', red_dice_rolled = () => {
    dice_number = Math.floor(Math.random() * 7)
    if ( dice_number > 0 && dice_number == 5){
        first_red_pawn.style.gridRow = "10";  

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