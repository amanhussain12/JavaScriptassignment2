// chapter no 4

// Question # 01
// (a)
// var message;
// message="<b>Rules for naming JS variables</b> <br><br><br>";
// document.write(message);

// (b)
// var message;
// message="Variable names can only contain . number, $ and__. For example : $ my__1st variable  <br>";
// document.write(message);

// (c)
// var message;
// message="variables must begin with a letter, $ or__. For example : $name, _name or name <br>";
// document.write(message);

// (d)
// var message;
// message="Variable names are case sensitive <br>";
// document.write(message);

// (e)
// var message;
// message="Variable names should not be JS keywords <br>";
// document.write(message);

// chapter no 5

// Question no 1
// var a ="3";
// var b ="5";
// console.log( a + b );
// let x = 3;
// let y = 5;
// console.log(x + y);


// Question no 2
// var a = 3;
// var b = 5;
// console.log(a * b );

// var a = 3;
// var b = 5;
// console.log(a - b );

// var a = 3;
// var b = 5;
// console.log(a / b );

// var a = 3;
// var b = 5;
// console.log(a % b );

// Question no 3
// var a = 5;
// document.write(++a);
// var message= ("value after variable declaration is undefined")
// var value = ("initial value : 5")
// var answer = ("value after increment is : 6")
// document.write(message + "<br>" + value + "<br>" + answer);

// var b = 13;
// document.write(--b)
// var value = (" value after addition is : 13")
// var answer = ("value after decrement is : 12")
// document.write( "<br>" + value + "<br>" + answer + "</br>" );

// variable = 9
// remainder = variable % 3
// document.write("The remainder is:", remainder)

// Question no 4
// let num1 =prompt("Enter num 1");
// let num2 =prompt("Enter num 2");
// let oprt =prompt("operator");
// if (oprt== "*") {
//     document.write(`<h1> Total cost to buy  ${num1} tickets to a movie is ${Number(num1) * Number(num2)} PKR </h1>`);
// }

// Question no 5
// document.write("<h1> Table of 4")
// let num1 ="4";
// let num2 ="1";
//     document.write(`<h1>   ${num1} * ${num2} =  ${Number(num1)  * Number(num2)} </h1>`);
// let nnum1 ="4";
// let nnum2 ="2";
//     document.write(`<h1>   ${nnum1} * ${nnum2} =  ${Number(nnum1)  * Number(nnum2)} </h1>`);
// let nuum1 ="4";
// let nuum2 ="3";
//     document.write(`<h1>   ${nuum1} * ${nuum2} =  ${Number(nuum1)  * Number(nuum2)} </h1>`);
// let numm1 ="4";
// let numm2 ="4";
//     document.write(`<h1>   ${numm1} * ${numm2} =  ${Number(numm1)  * Number(numm2)} </h1>`);
// let number1 ="4";
// let number2 ="5";
//     document.write(`<h1>   ${number1} * ${number2} =  ${Number(number1)  * Number(number2)} </h1>`);
// let numb1 ="4";
// let numb2 ="6";
//     document.write(`<h1>   ${numb1} * ${numb2} =  ${Number(numb1)  * Number(numb2)} </h1>`);
// let numbe1 ="4";
// let numbe2 ="7";
//     document.write(`<h1>   ${numbe1} * ${numbe2} =  ${Number(numbe1)  * Number(numbe2)} </h1>`);
// let numbers1 ="4";
// let numbers2 ="8";
//     document.write(`<h1>   ${numbers1} * ${numbers2} =  ${Number(numbers1)  * Number(numbers2)} </h1>`);
// let numbb1 ="4";
// let numbb2 ="9";
//     document.write(`<h1>   ${numbb1} * ${numbb2} =  ${Number(numbb1)  * Number(numbb2)} </h1>`);
// let numbbe1 ="4";
// let numbbe2 ="10";
//     document.write(`<h1>   ${numbbe1} * ${numbbe2} =  ${Number(numbbe1)  * Number(numbbe2)} </h1>`);

// Question no 6
// let celsiusTemp = 25; 
// let fahrenheitTemp = (celsiusTemp + 32) * 5/9;
// document.write(`<h1> ${celsiusTemp}°C is ${fahrenheitTemp.toFixed(1)}°F <br>`);

// fahrenheitTemp = 70;
// fahrenheitTemp = (celsiusTemp * 9/5) + 32;
// document.write(`${fahrenheitTemp}°F is ${celsiusTemp.toFixed(1)}°C`);

// Question no 7
// let priceofitem1 = "650"
// let priceofitem2 = "100"
// let quantityofitem1 = "3"
// let quantityofitem2 = "7"
// let shippingcharges = "100"
// let totalcost = (Number(priceofitem1) * Number(quantityofitem1)) + (Number(priceofitem2) * Number(quantityofitem2)) + Number(shippingcharges)
// document.write("<h1> Shopping Cart </h1>")
// document.write("Price of item 1 is " + priceofitem1 + "<br>")
// document.write("Quantity of item 1 is " + quantityofitem1 + "<br>")
// document.write("Price of item 2 is " + priceofitem2 + "<br>")
// document.write("Quantity of item 2 is " + quantityofitem2 + "<br>")
// document.write("Shipping Charges " + shippingcharges + "<br><br>")
// document.write("Total cost of your order is " + totalcost)

// Question no 8
// let totalmarks = "980"
// let obtainedmarks = "804"
// let percentage = (Number(obtainedmarks) / Number(totalmarks)) * 100
// document.write("<h1> Marks Sheet </h1>")
// document.write("Total marks: " + totalmarks + "<br>")
// document.write("Obtained marks: " + obtainedmarks + "<br>")
// document.write("Percentage: " + percentage.toFixed(13) + "%")

// Question no 9
// let usdollar = "10"
// let saudiriyal = "25"
// let totalcurrency = (Number(usdollar) * 277.23) + (Number(saudiriyal) * 74.02)
// document.write("<h1> Currency in PKR </h1>")
// document.write("Total Currency in PKR: " + totalcurrency)

// Question no 10
// let number = "5"
// let result = (Number(number) + 5 * 10) / 2
// document.write(result)


// Question no 11
// let currentyear = "2024"
// let birthyear = "2006"
// let age = Number(currentyear) - Number(birthyear)
// document.write("<h1> Age Calculator </h1>")
// document.write("Current Year: " + currentyear + "<br>")
// document.write("Birth Year: " + birthyear + "<br>")
// document.write("Your Age: " + age + "<br>")


// Question no 12
// let radius = "20"
// let circumference = 2 * 3.142 * Number(radius)
// let area = 3.142 * (Number(radius) * Number(radius))
// document.write("<h1> The Geometrizer </h1>")
// document.write("Radius of a circle: " + radius + "<br>")
// document.write("The circumference is: " + circumference + "<br>")
// document.write("The area is: " + area)

// Question no 13
// let snack = "chocolate chip"
// let currentage = "15"
// let maxage = "65"
// let amountperday = "3"
// let total = (Number(maxage) - Number(currentage)) * Number(amountperday)
// document.write("<h1> The Lifetime Supply Calculator </h1>")
// document.write("Favourite Snack: " + snack + "<br>")
// document.write("Current age: " + currentage + "<br>")
// document.write("Estimated Maximum Age: " + maxage + "<br>")
// document.write("Amount of snacks per day: " + amountperday + "<br>")
// document.write("You will need " + total + " " + snack + " to last you until the ripe old age of " + maxage)