//    Question_1
//  Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

/*var char = prompt("Enter a Char");
 var A = 65;
 var Z = 90;
 var a = 97;
 var z = 122;
if(char  >= A && char <= Z){
document.write("it,s uppercase letter");
}
else if(char  >= a && char <= z){
    document.write("it's lowercase letter");
}
else{
    document.write("Enter correct character or number")
};*/




// Question_2
// Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

/*var intiger1 = prompt("Enter First Number");
var  intiger2 = prompt("Enter Second Number");
if(intiger1 > intiger2){
    document.write("Then First Number is Greater then Second Number ");
}
else if(intiger1 == intiger2){
    document.write("First Number is Equal to Second Number");
}else{
    document.write("Second Number is Greater then First Number");
};*/




// Question_3

// Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.


/*var userInput = prompt("Enter a Number");

if(userInput == 0){
    document.write("Your Number is Zero");
}else if(userInput > 0){
    document.write("Your Number is Positive");
}else if(userInput < 0){
    document.write("Your Number is Negative");
}else{
    document.write("Please Enter a Valid number");
};*/




// Question_4
// Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise

/*var letter = prompt("Enter a letter");
if(letter == "a"){
    document.write("True");
}
else if(letter == "e"){
    document.write("True");
}
else if(letter == "i"){
    document.write("True");
}
else if(letter == "o"){
    document.write("True");
} 
else if(letter == "u"){
    document.write("True");
}
else{
    document.write("False");
};*/



// Question_5
// Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.


/*var user = prompt("Enter a Password");
var password1 = "zeeshan12";
var password2 = "haider12";

if(user == password1 || user == password2){
    document.write("Correct! ");
}
else{
    document.write("Incorrect password");
};*/


// Question_6
// This if/else statement does not work. Try to fix it:
// var greeting;


/*var hour = prompt("Enter ");
if (hour < 18) {
document.write("Good day");
}
else{
document.write("Good evening");
};*/





// Question_7
// Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

/*var hour = prompt("Enter a Number")

if(hour >= 0000 && hour <= 1000){
    document.write("Good Morning!");
}
else if(hour >=1000 && hour <= 1500){
document.write("Good AfterNoon!");
}
else if(hour >=1500 && hour <= 2000){
    document.write("Good evening!");
}
else if(hour >= 2000 && hour <= 2500){
    document.write("Good night!");
};*/