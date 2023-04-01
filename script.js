const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const specialChar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "|", "`", "~", ".", ",", "?", "/", "'", "<", ">", "-", "_"];
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const minPasswordLength = 8;
const maxPasswordLength = 128;

function getPasswordAttributes() {
  var isLengthValid = false;
  while (!isLengthValid){
  var passwordLength = prompt(`Choose Password Length Between ${minPasswordLength}-${maxPasswordLength} Characters`);
  isLengthValid = checkLength(passwordLength);
  }
  var useSpecial = confirm("Use Special Characters?");
  var useLower = confirm("Use Lower Case Letters?");
  var useUpper = confirm("Use Upper Case Letters?");
  var useNumerals = confirm("Use Numerals?");
  return  {useSpecial, useLower, useUpper, useNumerals, passwordLength}
  
}
function checkLength(passwordLength) {
  if (isNaN(passwordLength)) {
    alert("Must Be a Number");
    return false;     
  } else if (passwordLength < minPasswordLength || passwordLength > maxPasswordLength) {
    alert("Must Be Between 8-128 Characters");
    return false;
  } else if (passwordLength % 1 != 0) {
    alert("Must Be a Whole Number");
    return false;
  } else {
    return true;
  }
}
function getRandomCharacter(availableCharacters){
  var randomIndex = Math.floor(Math.random()*availableCharacters.length);
  return availableCharacters[randomIndex];
}
function buildPasswordArray(){
  var passwordAttributes = getPasswordAttributes()
  var passwordArray = []
  var availableCharacters = [].concat(specialChar, lowerCase, upperCase, numbers);
  for(let i = 0; i < parseInt(passwordAttributes.passwordLength); i++) {
    passwordArray.push(getRandomCharacter(availableCharacters));
  }
  return passwordArray;
}
function generatePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = buildPasswordArray().join("");
}

var generateButton = document.querySelector("#generate");
generateButton.addEventListener("click", generatePassword);