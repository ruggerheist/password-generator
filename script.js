// Assignment code here

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialChar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "|", "`", "~", ".", ",", "?", "/", "'", "<", ">", "-", "_"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


function generatePassword() {
  var length = prompt("Choose Password Length- Between 8-128 Characters");
  console.log("great success");

  checkLength();
  var specials = confirm("Use Special Characters?")
  console.log(specials)
  var lower = confirm("Use Lower Case Letters?")
  console.log(lower)
  var upper = confirm("Use Upper Case Letters?")
  console.log(upper)
  var number = confirm("Use Numerals?")

  function checkLength() {
    if (isNaN(length)) {
      console.log("not a number");
      alert("Must Be a Number")
      return;      
    } else if (length < 8 || length > 128) {
      console.log("out of range");
      alert("Must Be Between 8-128 Characters")
      return;
    } else if (length % 1 != 0) {
      console.log("whole number");
      alert("Must Be a Whole Number")
      return;
    } else {
    }
       
  }
//wont stop if not a number, generation pulls characters in order remaining only pulling from pool of lower case, generating in order of checklength var
  var options ={specials, lower, upper, number, length}
  return options
}
//this function isnt being called
function random(arr){
  var randomIndex = Math.floor(Math.random()*arr.length)
  return arr[randomIndex]
}
function buildPW(){
  var pwOptions = generatePassword()
  console.log(pwOptions)
  var pwArray = []
  var remaining = [pwArray]
  if (pwOptions.specials) {
    pwArray.push(random(specialChar))
  }
  if (pwOptions.lower) {
    pwArray.push(random(lowerCase))
  }
  if (pwOptions.upper) {
    pwArray.push(random(upperCase))
  }
  if (pwOptions.number) {
    pwArray.push(random(numbers))
  }
  console.log(pwArray)
  for(let i=pwArray.length; i < pwOptions.length; i++) {
    remaining.push(random(remaining))
   
    
    random();

  }

  console.log(remaining)
  return pwArray.join("")+remaining.join("")
}





/*  var shuffled = unshuffled
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
   
console.log(shuffled) */






// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = buildPW();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




