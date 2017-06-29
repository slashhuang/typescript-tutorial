
var p =()=>{
  for (let i = 0; i < 10 ; i++) {
      setTimeout(function() {console.log(i); }, 100 * i);
  }
}


const numLivesForCat = 9;
const kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
}
//
// // Error
// kitty = {
//     name: "Danielle",
//     numLives: numLivesForCat
// };

// all "okay"
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;
