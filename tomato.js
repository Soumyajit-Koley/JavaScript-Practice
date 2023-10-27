// Identify your age lies between 10 to 20

let age = prompt("Enter your age here: ");
// age = a;
age = Number.parseInt(age);

if (age<0) {
    alert("This is an invalid age.");
    console.log("This is an invalid age.");
}
else if (age<10){
    alert("This is a valid age but it does not lie between 10 to 20.");
    console.log("This is a valid age but it does not lie between 10 to 20.");
}
else if (age>10 && age<20){
    alert("This is a valid age and it lies between 10 to 20.");
    console.log("This is a valid age and it lies between 10 to 20.");
}
else{
    alert("You are older and not eligible for this program.");
    console.log("You are older and not eligible for this program.");
}
