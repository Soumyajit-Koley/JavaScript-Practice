// This is an example of conformation pop-up in website

let age = prompt('Enter your age here: ');
age = Number.parseInt(age);

if (age<0){
    alert("This is an invalid age.");
}
else if (age<18){
    alert("You are a minor for this content.");
}
else if (age>18){
    alert("Please confirm your age.");
}
else {
    alert("Please confirm your age.");
}

