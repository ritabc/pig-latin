var ending = "ay"

$(document).ready(function() {
  $("#submit").click(function(event){
    event.preventDefault();
    var input = $("#input").val();
    if (!hasNumber(input)) {
      var toPrint = isTheFirstLetterAVowel(input)
    }
    console.log(toPrint)
  });
});

function hasNumber(input){
  for (iterator = 0; iterator <= input.length - 1; iterator++) {
    for (number = 0; number <= 9; number++) {
      if (input[iterator] == number) {
        alert("Please enter a word or sentence without number digits");
        return true // if it has a number
      }
    }
  }
  if (iterator == input.length){
    return false
  }
};

 function isTheFirstLetterAVowel(word) {
   vowelList=["a", "e", "i", "o", "u"];
   for (y=0;y<=vowelList.length -1;y+=1){
     if (word[0] == vowelList[y]){
       return true
     }
   }
   y+=1
   if (y==6){
     return false
   }
 }
