//chapter 1 Alerts
//Q1 & Q2

alert("Error! Please enter avalid password")

//Q3

alert("Welcome to js land...\n happing coding")

//Q4

alert("Welcome to js landing")
alert("Happy Coding!")

//Q5

alert("Hello...I can run JS through my web browser's console")

// ===Assignment 2=== task 1
var a = "babar";
alert(a)
// === task 2 ===
var b = "Babar Munawar";
alert(b)

// === task 3 ===

var message = "Hello World"
alert(message)

// === task 4 ===

var name = prompt("Enter your Name")
alert(name)
var lastName = prompt("Enter your Last Name")
alert(lastName)
var age = prompt("Enter your Age")
alert(age)
var email = prompt("Enter your Email")
alert(email)
var phoneNumber =prompt("Enter your Number")
alert(phoneNumber)

// === task 5 ===

var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP"
alert(pizza)

// === task 6 ===

var Email = "My Email Address is babarmunawar07@gmail.com"
alert(Email)

// === task 7 ===

var book = "A smarter way to learn JavaScript"
alert(book)

// === task 8 ===

document.write("Yah! I can write HTML content through JavaScript")


// === Assignment 3 === task 1 ===

var age = "I am 19 years old"
alert(age)

// === task 3 ===

document.write("My Birth Year is 2000")

// === task 4 ===

var vistorName =prompt ("Name")
alert(vistorName)
var product =prompt ("Product Title")
alert(product)
var quantity =prompt ("Quantity")
alert(qunatity)

// === Assignment 4 Task 1 ===

var a = 66;
var b = 8;
var c = a + b;
alert(c)

// === Task 3 ===

document.write("<h1>Rules for naming JS variables <h1/>")
document.write("Variables names can only contain , numbers , $ And _ <br/> Variables must began with a letter, $ or _ . For example: $name, _name or name <br/> Variables are case sensative <br/> Variables should not be JS keywords ")

// === Assignment 5 
// Task 1 ===

var a = 7;
var b = 5;
var c = a+b;

document.write("the sum of " + a + " and " + b + " is " + c +"<br>")

// task 2

var a = 7;
var b= 5;
var d =a-b;
document.write("the subtraction of " + a + " and " + b + " is " + d+"<br>")


var a = 7;
var b= 5;
var d =a*b;
document.write("the multiplication of " + a + " and " + b + " is " + d+"<br>")


var a = 7;
var b= 5;
var d =a/b;
document.write("the division of " + a + " and " + b + " is " + d+" <br>")

var a = 7;
var b= 5;
var d =a%b;
document.write("the Modulus of " + a + " and " + b + " is " + d+"<br> <br>")


// task 3
var a = "";
document.write("value after variable declaration is " + a +"<br>")
a = 5;
document.write("initial value: "+a + "<br>" )

var a = ++a;
document.write("after increment "+a + "<br>" )

var b = 7;
var c = a + b;
document.write("value after addition is:" + c + "<br>")

var c = --c;
document.write("value after decrement is:" + c+ "<br>" )

var d = c%3;
document.write("remainder is:" + d +"<br> <br>")

// Task 4

var ticketPrice = 600;
var Quantity = 5;
var totalprice = ticketPrice*Quantity;
document.write("total cost to buy " + Quantity + " tickets to a movie is " + totalprice +"PKR"+ "<br> <br>" )

// Task 5 

var table = 4;
document.write(table + "x" + "1" + "= " + table*1 + "<br>" )
document.write(table + "x" + "2" + "= " + table*2 + "<br>" )
document.write(table + "x" + "3" + "= " + table*3 + "<br>" )
document.write(table + "x" + "4" + "= " + table*4 + "<br>" )
document.write(table + "x" + "5" + "= " + table*5 + "<br>" )
document.write(table + "x" + "6" + "= " + table*6 + "<br>" )
document.write(table + "x" + "7" + "= " + table*7 + "<br>" )
document.write(table + "x" + "8" + "= " + table*8 + "<br>" )
document.write(table + "x" + "9" + "= " + table*9 + "<br>" )
document.write(table + "x" + "10" + "= " + table*10 + "<br> <br>" )

// Task 6

var celsius = 25;
var intoFarhrenheit =  (celsius*9/5) + 32;
document.write(celsius +"°C is " +  intoFarhrenheit + "°F" + "<br>")
var ferhrenheit = 70;
var intoCelsius = (ferhrenheit-32) * 5/9;
document.write(ferhrenheit +"°F is " +  intoCelsius + "°C" + "<br> <br>")

// Task 7

document.write("<h1> Shopping Cart</h1>")
var poi1 = 650;
var quantity1 = 3;
var poi2 = 100;
var quantity2 = 7;
var shippingCharges = 100;
var totalCost =  (poi1 * quantity1) + (poi2 * quantity2);
document.write("Price of item 1 is " + poi1 +"<br>")
document.write("Quantity of item 1 is " + quantity1+"<br>")
document.write("Price of item 2 is " + poi2+"<br>") 
document.write("Quantity of item 2 is " + quantity2+"<br> <br>")
document.write("total cost of your order is " + totalCost+"<br> <br>")

// Task 8
 var totalMarks = 980;
 var obtainMarks = 804;
 var percent = (obtainMarks/totalMarks) * 100;
 document.write("total marks:" + totalMarks + "<br>")
 document.write("marks obtain:" + obtainMarks + "<br>")
 document.write("percentage:" + percent + "<br>")



// === Assignment 9-11 Task 1 ===

var city = prompt("Enter your city")
if (city === "karachi") {
    alert("Welcome to city of Lights")
    
}else {
    alert("welcome")
}

// === Task 2 ===

var gender = prompt("Enter your Gender")

if (gender === "male" ) {
    alert("Good Morning Sir")
   
    
}else if (gender === "female"){
    alert("Good morning ma'am")

}





// === Task 3 ===

var signalColor = prompt("Enter Your Color")
if (signalColor === "red") {
    alert("must stop")

} else if (signalColor === "yellow") {
    alert("ready to move")

}else if (signalColor === "green") {
    alert("move now")
    
}

// === Task 4 ===

var fuel = prompt("enter fuel in car")
if ( fuel < 0.25) {
    alert("Please refill the fuel in your car")
    
}

// task 5
 var a = 4; 
 if (++a === 5){ 
     alert("given condition for variable a is true"); 
    }

    var b = 82; 
    if (b++ === 83){ 
        alert("given condition for variable b is true"); 
}  

var c = 12; 
if (c++ === 13){ 
    alert("condition 1 is true"); 
} if (c === 13){ 
    alert("condition 2 is true");
 } if (++c < 14){ 
     alert("condition 3 is true"); 
    } if(c === 14){ 
        alert("condition 4 is true"); 
    }
    
    var materialCost = 20000; 
    var laborCost = 2000; 
    var totalCost = materialCost + laborCost; 
    if (totalCost === laborCost + materialCost){ 
        alert("The cost equals"); 
}  

if (true){ 
    alert("True"); } 
if (false){ 
    alert("False"); }  

    if("car" < "cat"){ 
        alert("car is smaller than cat"); 
} 

// Task 6

var totalMarks = prompt("enter your total marks")
var obtain = prompt("enter your obtain marks")
var perncentage = (obtain/totalMarks) * 100;
document.write("Total marks: " +totalMarks + "<br>"  )
document.write("Marks Obtain: " + obtain +"<br>" )
document.write("percantage: " + perncentage+ "<br>")
if (perncentage >= 80 ) {
document.write("Grade: A-one")
document.write("Remark: Excelent")
    
} else if (perncentage >= 70 ) {
    document.write("Grade: A"+ "<br>" )
    document.write("Reamrk: Good")
        
}  else if (perncentage >= 60 ) {
    document.write("Grade: B"+"<br>")
    document.write("Remark: you need to improve")
        
}  else if (perncentage < 60 ) {
    document.write("Grade: Fail"+"<br>")
    document.write("Remark: Sorry" +"<br>")
        
}  

//   Task 9
var x = prompt("Enter your number");
if (x % 2 === 0 ) {
    alert("number is even")
} else{
    alert("number is odd")
}

//    Task 10
var temp = prompt("Enter Temperature of your city")
if (temp > 40){
    alert( "It is too hot outside." )
} else if (temp > 30){
    alert("Today's Weather is Normal")
} else if (temp > 20) {
    alert("Today's Weather is cool")
} else {
    alert("Today's Weather is so cool")
}

//   Task 11
var number1 = prompt("Enter Your First Number");
var opt = prompt("Enter opt");
var number2 = prompt("Enter Your Second Number") ;
if (opt === "+") {
    alert((+number1) + (+number2))
} else if (opt === "-") {
    alert((+number1) - (+number2))
} else if (opt === "*") {
    alert((+number1) * (+number2))
} else if (opt === "/") {
    alert((+number1) / (+number2))
} else if (opt === "%") {
    alert((+number1) / (+number2) * 100 + "%")
} else {
    alert("opt not found")
}
    








