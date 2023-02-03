// Question_1

// var a = 10;
// ++a;
// a++;
// --a;
// a--;
// document.write(a);

// Quesrtion_2

// var a = 2, b = 1;
//  var result = --a - --b + ++b + b--;
// document.write(result);

// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;



// Question_3

// var name = prompt ("Enter Your name");;
// document.write("How are You " + name);


// Question_5


// document.write("<h1>Table OF 3!</h1><br>")
// var num1 = "3 * 1 = 3 <br>"
// var num2 = "3 * 2 = 6<br>";
// var num3 = "3 * 3 = 9 <br>"
// var num4 = "3 * 4 = 12 <br>"
// var num5 = "3 * 5 = 15 <br>"
// var num6 = "3 * 6 = 18 <br>"
// var num7 = "3 * 7 = 21 <br>"
// var num8 = "3 * 8 = 24 <br>"
// var num9 = "3 * 9 = 27 <br>"
// var num10 = "3 * 10 = 30"
// document.write(num1,num2,num3,num4,num5,num6,num7,num8,num9,num10);
 
// Question_7
 
var anyNum = "Enter a Number";
var defaultAnswar = 5;
var num = prompt(anyNum,defaultAnswar )
for(var i = 1 ; i<=10 ; i++){
    var result = num * i;
    document.write(`${num} * ${i} = ${result} `+ "<br>");
};