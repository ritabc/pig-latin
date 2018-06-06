
$(document).ready(function() {
  $("#submit").click(function(event){
    event.preventDefault();
    var input = $("#input").val();
    if (!hasNumber(input)) {
      var toPrint = moveOneBeginningConsonant(input)
    }
    console.log(toPrint)
    // moveOneBeginningConsonant(input);
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

// function isVowel(char) {
//    vowelList=["a", "e", "i", "o", "u"];
//    for (y = 0; y <= vowelList)
// }
function addAYEnding(word) {
 return word + "ay"
}

function vowelBeginningAddEnding(word) {
 // var input = $("#input").val();
 if (isTheFirstLetterAVowel(word)) {
   return addAYEnding(word);
 }
}

function moveOneBeginningConsonant(word) {
  if (!isTheFirstLetterAVowel(word)) {
    var firstLetter = word.slice(0, 1);
    var endOfWord = word.slice(1);
    var scrambled = endOfWord + firstLetter;
    return addAYEnding(scrambled);
  }
}
