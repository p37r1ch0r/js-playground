// = means assign what's on the right to the left.
// let message = "Hello World!";
// message += "Put another string in there.";

// // let number = 3 / 9;
// // number -= 5;

// console.log(message + number);

let family = ["Alex", "Bethany", "Pearl", "Liam", "Xander", "Elijah"];

// console.log(family[2]);
for (let i = 0; i < family.length; i++) {
    console.log(family[i]);
}
let newFamilyMember = "Bethany";
family.push(newFamilyMember);
console.log(family);

for (let i = 0; i < family.length; i++) {
    console.log(family[i]);
}

// [Array] 
// {Object} 
// (function){}