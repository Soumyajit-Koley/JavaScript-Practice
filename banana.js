let a = prompt("The first number is : ");
let b = prompt("The second number is : ");
a = Number.parseFloat(a);
b = Number.parseFloat(b);
let sum = a+b ;
let sub = a-b ;
let multi = a*b ;
let divi = a/b ;
let mod = a%b ;
let exp = a**b ;

if (a=NaN,b=NaN) {
    console.log("Invalid input");
}
else {
    console.log("The sum of two number is : ", sum);
    console.log("The substraction of two number is : ", sub);
    console.log("The multiplication of two number is : ", multi);
    console.log("The division of two number is : ", divi);
    console.log("The modulus of two number is : ", mod);
    console.log("The exponent of two number is : ", exp);
}