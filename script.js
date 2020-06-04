
//Varibles for charater types to be inclued in the Password
let char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let num = "123456789";
let sym = "!@#%^&*()?";

// Assignment Code
let generateBtn = document.querySelector('#generate');

generateBtn.addEventListener('click', function(){	
let charBox = confirm ("Would you like to inclued Characters?");
let numBox = confirm("Would you like to inclued numbers?");
let symBox = confirm("Would you like to inclued symbols?");
let charNum = (function ask() {
	var n = prompt("How many Characters would you like your password to be? Please select between 8 and 128!");
	
	return isNaN(n) || +n > 128 || +n < 8 ? ask() : n;
  }());
  

// Write password to the #password input
let characters = '';
let length = Number (charNum);

if(charBox){
	characters += char;
}
if (symBox){
	characters += sym;
}
if (numBox){
	characters += num;
} 
let password = '';

for (let i = 0; i < length; i++)
  password += characters.charAt(Math.floor(Math.random() * characters.length));

  //generatePassword();
let passwordText = document.querySelector('#password');

passwordText.value = password;
})