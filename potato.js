// Check if the number is divisible by 2, 5, 2 or 5, 2 and 5

let num = prompt("Enter your number here: ");
num = Number.parseFloat(num);

if (num %2 == 0 && num %5 == 0) {
    alert("Your number is divisible by 2 and 5");
}
else if (num %2 == 0  ) {
    alert("Your number is divisible by 2 ");
}
else if (num %5 == 0 ) {
    alert("Your number is divisible by 5");
}
else if (num %2 == 0 || num %5 == 0 ) {
    alert("Your number is divisible by 2 or 5");
}
else {
    alert("Your number is not divisible by 2 and 5");
} 