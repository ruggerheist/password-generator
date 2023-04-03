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
  if (passwordLength === null) {
    return null;
  }
  if (isNaN(passwordLength)) {
    alert("Must Be a Number");
    return getPasswordAttributes();     
  } else if (passwordLength < minPasswordLength || passwordLength > maxPasswordLength) {
    alert("Must Be Between 8-128 Characters");
    return getPasswordAttributes();
  } else if (passwordLength % 1 != 0) {
    alert("Must Be a Whole Number");
    return getPasswordAttributes();
  }
  var useSpecial = confirm("Use Special Characters?");
  var useLower = confirm("Use Lower Case Letters?");
  var useUpper = confirm("Use Upper Case Letters?");
  var useNumerals = confirm("Use Numerals?");
  if (!useSpecial && !useLower && !useUpper && !useNumerals)
  {
    alert("MUST SELECT AT LEAST ONE OPTION!");
    getPasswordAttributes()
  }
  return  {useSpecial, useLower, useUpper, useNumerals, passwordLength};
  }
}
function getRandomCharacter(availableCharacters){
  var randomIndex = Math.floor(Math.random()*availableCharacters.length);
  return availableCharacters[randomIndex];
}
function shufflePasswordArray(passwordArray) {
  for (let i = passwordArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [passwordArray[i], passwordArray[j]] = [passwordArray[j], passwordArray[i]];
  }
  return passwordArray;
}
function buildPasswordArray(){
  var passwordAttributes = getPasswordAttributes();
  if (passwordAttributes === null) {
    return null;
  }
  var passwordArray = [];
  var availableCharacters = [];
  var attributeIndex = 0;
  if (passwordAttributes.useSpecial) availableCharacters.push(specialChar);
  if (passwordAttributes.useLower) availableCharacters.push(lowerCase);
  if (passwordAttributes.useUpper) availableCharacters.push(upperCase);
  if (passwordAttributes.useNumerals) availableCharacters.push(numbers);  
  for(let i = 0; i < parseInt(passwordAttributes.passwordLength); i++) {   
    passwordArray.push(getRandomCharacter(availableCharacters[attributeIndex]));
    attributeIndex++;
    if (attributeIndex === availableCharacters.length) attributeIndex = 0;
  }
  return shufflePasswordArray(passwordArray);
}
function generatePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = buildPasswordArray().join("");
}

var generateButton = document.querySelector("#generate");
generateButton.addEventListener("click", generatePassword);