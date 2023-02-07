// Question_1

/*var city = prompt("Enter City Name")
if(city == "karachi"){
    document.write("Well come to The City of Light")
}else if(city == "Baltistan")
{
    document.write("Well come to land of Peace, Beauty and Love.")
}
else if( city == "Lahore"){
    document.write("Well come to The Heart of Pakistan ")

}
else{
    document.write("Welcome to " + `${city}`);
};*/
 

// Question_2

/*var gender = prompt("Enter Your Gender");
if(gender == "Male"){
    document.write("Good morning Sir")
}else if(gender =="Female"){
    document.write("Good Morning Ma,am")
}else{
    document.write("Sorry??")
};*/

// Question_3


// var signalColour = prompt("Trafic Signal");
// if(signalColour == "red"){
//     document.write("Must Stop");
// }
// else if(signalColour == "yellow"){
//     document.write("Ready to move");
// }else if(signalColour == "green"){
//     document.write("Move Now");
// }else{
//     document.write("You Enter Incorrect")
// };  


// Question_4

// var carFule = prompt("Remaning fuel");
 
// if(carFule <=
//      0.25){
//     document.write("“Please refill the fuel in your car”")
// }else if(carFule > 0.25){
//     document.write("Fule is enough")
// };


// Question_5

    //   A
// var a = 4;
// if(++a === 5){
//     alert("given condition for variable a is true");
// };


   //    B

//    var b = 82;
//    if(b++ === 83){
//     alert("given condition for variable b is true");
//    };
    //  C

    // var c = 12;
    // if(c++ === 13){
    //     alert("Condition 1 is true")
    // }
    // if(c === 13){
    //     alert("Condition 2 is true")
    // }
    // if(++c < 14){
    //     alert("Condition 3 is true")
    // }
    // if(c === 14){
    //     alert("Condition 4 is true")
    // };
        //  D
// var materialCost = 20000;
// var labourCost = 2000;
// var totalCost = materialCost + labourCost;
// if (totalCost === materialCost + labourCost){
//     alert("The cost Equal")
// };

      // E

    //   if(true){
    //     alert("True")
    //   }
    //   if(false){
    //     alert("False")
    //   };

        //  F

    // if("car" < "cat"){
    //     alert("car is smaller than cat"); 
    // };
 



    // Question_6

    /*var markssheet = " <h1> Marks Sheet </h1>"
    document.write(markssheet);

    var english = prompt("Enter English Mark");
    var computer = prompt("Enter Computer Mark");
    var obtainMarks = english + computer + physics; 
    var physics = prompt("Enter Physics Mark ");
    var obtainMarks = +english + +computer + +physics; 
    document.write("Obtain Marks " + obtainMarks + "<br>");
    var totalMarks =  300;
    document.write("Total Marks " + totalMarks + "<br>");
    var percentage = (obtainMarks / totalMarks)* 100;
    document.write("Percentage " + percentage + "%" + "<br>");

    if(percentage >= 80){
         var  grade = "A1";
         document.write("Grade: " + grade + "<br>");
         var remarks =  "Exceptional";
         document.write("Remarks: " + remarks);
     }
     else if(percentage >= 70 && percentage < 80){
        var grade = "A";
         document.write("Grade:  " + grade + "<br>");
         var remarks = "Excelent";
         document.write("Remarks " + remarks);
     }
     else if(percentage >= 60 && percentage < 70){
        var grade = "B";
         document.write("Grade: " + grade + "<br>")
         var remarks = "Very Good";
         document.write("Remarks" + remarks);
    }else if(percentage >= 50 && percentage < 60){
        var grade = "C";
        document.write("Grade: " + grade + "<br>");
        var remarks = "Good"
        document.write("Remarks: " + remarks);
    }else if(percentage >= 40 && percentage < 50){
    var grade = "D";
    document.write("Grade: " + grade  + "<br>")
    var remarks  = "Fair";
    document.write("Remarks: " +  remarks)
    }else if(percentage >= 10 && percentage < 40){
        var grade = "E";
        document.write( "Grade: " + grade  + "<br>")
        var remarks = "Fail"
        document.write("Remarks " + remarks);
    };*/


    //   Question_7

    /*var guessGame = prompt("Enter Guesses Number")
    

    if(guessGame == 3){
        document.write("Bingo! Correct Answer")
    }else if(guessGame > 3 || guessGame < 3){
        document.write("Close Enough to the correct answer")
    };*/

    // Question_8

    /*var num =  prompt("Enter a number")
    if(num % 3 == 0){
       document.write("The given number is divisible by 3");

    }else{
       document.write("The given  Number is not divisible by 3");
    };*/

    //   Question_9

     /*var num = prompt("Enter a number")
     if (num % 2 ==0){
        document.write("The Given Number is Even ");
     }else{
        document.write("The Given Number is Odd");
     };*/



    //  Question_10


//     var num = prompt("Today Temperature is");
//     if( num > 40) {
//         document.write("it is too hot outside")
//     }else if(num > 30){
        
//     document.write("The Weather today is normal");
// }else if(num > 20){
//     document.write("Today Weather is cold");
// }else if(num > 10){
//     document.write("OMG!today weather is so cold")
// };


// Question_11


// var firstNum = prompt("Enter First Number");
// var operator = prompt("Enter an Operator");
// var secondNum = prompt("Enter a Second Number");
// // var operator = "+" + "-" + "/" + "*" + "%";

// if(operator == "+"){
//     var result = +firstNum + +secondNum;
//     document.write( ` ${firstNum} + ${secondNum} = ${result}`)
// }
// else if(operator == "/"){
//     var result = firstNum / secondNum;
//     document.write(` ${firstNum} / ${secondNum} = ${result}`);
// }
// else if(operator == "-"){
//     var result = firstNum - secondNum;
//     document.write(` ${firstNum} - ${secondNum} = ${result}`);
// }
// else if(operator == "*"){
//     var result = firstNum *  secondNum;
//     document.write(` ${firstNum} * ${secondNum} = ${result}`);
// }
// else if(operator == "%"){
//     var result = firstNum % +secondNum
//     document.write(`${firstNum} % ${secondNum} = ${result}`);
// }
// else{
//     document.write("Please Enter a Correct Operatore");
// };

      













// if("geolocation" in navigator) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//         let lat = position.coords.latitude;
//         let lon = position.coords.longitude;
//         console.log("Latitude: " + lat + "\nLongitude: " + lon)
//     });
// }
// else{
//     console.log("Geolocation is not support by this location.");
// }


// fetch("https://api.ipgeolocation.io/ipgeo?apiKey=YOUR_API_KEY&ip=" + userIP) 
//   .then(response => response.json())
//   .then(data => {
//     console.log("City: " + data.city+ "\nCountry: " +  data.country_name);
//   })  
//    .catch(error =>  {
//     console.error("Error: " + error);
//    });