# Pig Latin Translator

#### A site to translate text to Pig Latin

#### By Rita Bennett-Chew and Nick Brown

## Description

Translate text into Pig Latin

## Setup/Contribution Requirements

1. Clone the repo
1. Make a new branch
1. Commit and push your changes
1. Create a PR

## Technologies Used

* HTML
* CSS
* JavaScript
* jQuery
* Bootstrap

## List of Specs
* The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
  - _Example Input: _ 3
  - _Example Output: _ 3
* The program adds "ay" to single-letter words beginning with a vowel.
  - _Example Input: _ i
  - _Example Output: _ iay
* Add 'ay' to words beginning with a vowel
  - _Example Input: _ omelette
  - _Example Output: _ omeletteay
* For words beginning with one consonant, move the first consonant to the end of the word, then add 'ay' to the end of the word
  - _Example Input: _ bagel
  - _Example Output: _ agelbay
* For words beginning with 2 consonants, move the 2 consonants to the end of the word, then add 'ay' to the end of the word
  - _Example Input: _ cheers
  - _Example Output: _ eerschay
* For words beginning with one+ consonant, move the first consonant+ to the end of the word, then add 'ay' to the end of the word
  - _Example Input: _ school
  - _Example Output: _ oolschay  
* For words beginning with qu, move "u" along with the q to the end of the word, then add 'ay' to the end of the word
  - _Example Input: _ quit
  - _Example Output: _ itquay     
* For words beginning with a group of consonants containing qu, where q does not come first, move the first consonants and the "u" to the end of the word, then add 'ay' to the end of the word
  - _Example Input: _ squeal
  - _Example Output: _ ealsquay
* Translate a string of words (separated by only spaces) into pig latin
  - _Example Input: _ The pig flew
  - _Example Output: _ ethay igpay ewflay
* Translate a string of words which includes commas or other punctuation into pig latin, ignoring punctuation
  - _Example Input: _ The pig flew, quickly, away. She was chased by the hog farmer.
  - _Example Output: _ ethay igpay ewflay icklyquay awayay eshay asway asedchay byay ethay oghay armerfay
* Optional (if we have time) Translate a string of words which includes commas or other punctuation into pig latin, keeping punctuation entact
  - _Example Input: _ The pig flew, quickly, away. She was chased by the hog farmer.
  - _Example Output: _ ethay igpay ewflay, icklyquay, awayay. eshay asway asedchay byay ethay oghay armerfay.   
## Links
* [Here](https://github.com/ritabc/pig-latin) is a link to Rita's public repository.
* [Here](https://github.com/nickrossbrown/pig-lating) is a link to Nick's public repository.

## License

This software is licensed under the MIT license.

Copyright (c) 2018 **Rita Bennett-Chew**
