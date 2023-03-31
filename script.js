// Assignment code here

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialChar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "|", "`", "~", ".", ",", "?", "/", "'", "<", ">", "-", "_"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var length;

function generatePassword() {
  length = prompt("Choose Password Length- Between 8-128 Characters");
  console.log("great success");

  checkLength();
}

/* generatePassword(); */
// page not loading properly or logging prompt input
function checkLength() {
  if (typeof length === "number") {
    if (length < 8 || length > 128) {
      console.log("bad");
    }else {
      console.log("good");
      if (Number.isInteger(length)) {
        console.log("next prompt");
      } else {
        console.log("dont continue");
      }
    }

    console.log("valid");
  } else {
    console.log("invalid");
  }
  

}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




