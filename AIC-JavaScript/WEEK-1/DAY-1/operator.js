//<------------- Arithmetic operators------------>
var a = 20;
var b = 10;
var c= a+b;
console.log("Sum = "+c);
var c= a-b;
console.log("Subtraction = "+ c);
var c= a*b;
console.log("Mul= "+c);
var c= a/b;
console.log("Divide = " +c);
var c= a%b;
console.log("Remainder = "+c);
 

 // increment
  a++;
  console.log("Increment of a= "+a);
 // Decrement
  b--;
  console.log("Decrement of a ="+ b);

//   <-------------Comparison operators----------->

// double equal(==)
 const x = 5;
 const y = "5";
 if (x==y) {
    console.log("True");
 }else{
    console.log("False");
 }

 //Triple equal (===)

 if (x===y) {
    console.log("true");
 }else{
    console.log("false");
 }

 //  Greater than equal too and less than equal too

 const value1  = 10;
 const value2  = 40;
 if (value1>=value2) {
    console.log("True");
 }else{
    console.log("False");
 }
// less than equal too
 if (value1<=value2) {
    console.log("True");
 }else{
    console.log("False");
 }

//  <------------------------Logical Operators-------------------->
// &&(AND) operator

 const marks = 70;
 const skill = "JavaScript";
 if (marks>=60 && skill==="JavaScript" ) {
    console.log("Eligible for apply");
 }else{
    console.log("Not Eligible");
 }

// // OR (||) OPERATOR
 if (marks>=90 || skill==="JavaScript" ) {
    console.log("Eligible for apply");
 }else{
    console.log("Not Eligible");
 }


//  <------------------------Assignment Operators-------------------->
 // simple equal too (=)
 let j = 50;
 console.log("Simple eual too = "+j);

 // +=(addition AND OPERATOR)
 j += 10;
 console.log("addition AND OPERATOR "+j);

 // -=(subtraction AND OPERATOR)
  j -= 10;
 console.log("subtraction AND OPERATOR "+j);
 // *=(multiplication AND OPERATOR)
  j *= 2;
  console.log("multiplication AND OPERATOR "+j);
  j /= 2;
  console.log("divide AND OPERATOR "+j);
  j %= 3;
  console.log("Moudule AND OPERATOR "+j);
 
//  <------------------------Ternary Operators-------------------->

const name = "Raushan";

name ==="Raushan"?console.log(name):console.log("Something is wrong");