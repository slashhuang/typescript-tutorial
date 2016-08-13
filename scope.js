var p = function () {
    var _loop_1 = function(i) {
        setTimeout(function () { console.log(i); }, 100 * i);
    };
    for (var i = 0; i < 10; i++) {
        _loop_1(i);
    }
};
var numLivesForCat = 9;
var kitty = {
    name: "Aurora",
    numLives: numLivesForCat
};
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
