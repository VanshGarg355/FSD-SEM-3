// IF STATEMENTS = if a condition is true, execute some code if not, do something else


let age = 13;

if(age >= 18){
console.log("You are old enough to enter this site");
}
else{
console.log("You must.be 18+ to enter this site");
}




let time = 14;

if(time < 12){
console.log("Good morning!");
}
else{
console.log("Good afternoon!");
}




let isstudent = true;

if(isstudent){
console.log("You are a student!");
}
else{
console.log("You are NOT a student!");

}




let age2 = 18;
let hasLicense = true;

if(age2 >= 16){
console.log("You are old enough to drive");

if(hasLicense){
console.log("You have your license!");
}
else{
console.log("You do not have your license yet!");
}
}
else{
console.log("You must be 16+ to have a license");

}



switch (year) {
    case 2000:
        console.log("Year is 2000");
        break;
    case 2001:
        console.log("Year is 2001");
        break;
    default:
        console.log("Year is not 2000 or 2001");
}
