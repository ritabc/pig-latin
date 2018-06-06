$(document).ready(function() {
  $("#submit").click(function(event){
    event.preventDefault();
    var input = $("#input").val();
    // console.log(input);
    var toPrint = hasNumber(input)
    console.log(toPrint)
  });
});

function hasNumber(input){
  for (iterator = 0; iterator <= input.length - 1; iterator++) {
    for (number = 0; number <= 9; number++) {
      if (input[iterator] == number) {
        return true // if it has a number
      }
    }
  }
  if (iterator == input.length){
    return false
  }
};
