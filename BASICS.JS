console.log("Hello, World!");
console.log(3 * 2.00);
console.log(10 / 4.0);

console.log(-3 % 5); //-3


//mod function
function mod(a, b) {
    return a % b;
}
console.log(mod(2, 5));



let year = 1100;

if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            console.log(year + " is a leap year.");
        } else {
            console.log(year + " is not a leap year.");
        }
    }
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


// var let const

//var
//var local scope
//value update & reasign the value

//let
//value can be update but can not be reasign

//const
//value can not be update & can not be reasign but if we use the array and object so we cn change

const x=['10','20','20'];
x.push('40');
console.log(x);


//js ko teminal main chalane ke liye node filename.js



