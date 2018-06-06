
$(document).ready(function() {
  $("#submit").click(function(event){
    event.preventDefault();
    var input = $("#input").val();
    // if (!hasNumber(input)) {
    //   var toPrint = consonantPlus(input)
    // }
    var toPrint = startsWithQu(input)

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

// function vowelBeginningAddEnding(word) {
//  // var input = $("#input").val();
//  if (isTheFirstLetterAVowel(word)) {
//    return addAYEnding(word);
//  }
// }

// function moveOneBeginningConsonant(word) {
//   if (!isTheFirstLetterAVowel(word)) {
//     var firstLetter = word.slice(0, 1);
//     var endOfWord = word.slice(1);
//     var scrambled = endOfWord + firstLetter;
//     return addAYEnding(scrambled);
//   }
// }
// function moveTwoConsonants(word) {
//
//   if (!isTheFirstLetterAVowel(word)) {
//     var firstLetter = word.slice(0, 1);
//     var endOfWord = word.slice(1);
//     if (!isTheFirstLetterAVowel(endOfWord)){
//       var firstLetter = word.slice(0, 2);
//       var endOfWord = word.slice(2);
//       var scrambled = endOfWord + firstLetter;
//       return addAYEnding(scrambled);
//     };
//   };
// }

function consonantPlus(word){
  var localWord = word
  var firstLetters = ""
  x=0
  for (;x<word.length;){
    if (!isTheFirstLetterAVowel(localWord)){
      var firstLetter = localWord.slice(0, 1);
      firstLetters = firstLetters + firstLetter
      localWord = localWord.slice(1);
      x+=1
    }
    else if (isTheFirstLetterAVowel(localWord)){
      var finalWord = localWord + firstLetters + "ay"
      return finalWord
    }
  };
}

function startsWithQu(word) {
  if (word[0] === "q" && word[1] === "u") {
      endOfWord = word.slice(2);
        return addAYEnding(endOfWord + "qu");
  }
};

function accountsForSqueal(word) {
  // loop through first set of consonants
  // if we come across a q before hitting any vowels
  //// return true or do something
  wordArray = word.split('')

}

function consonantPlusIncludingQuStart(word){
  var localWord = word
  var firstLetters = ""
  x=0

}
