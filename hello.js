const readLine = require("readline")
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})
// let familyNames = [
//     "Alex",
//     "Bethany",
//     "Pearl",
//     "Liam",
//     "Xander",
//     "Elijah"
// ]

// for (let i = 0; i < familyNames.length; i++) {
//     sayHello(familyNames[i])
// }

// familyNames.forEach(familyName => {
//     sayHello(familyName);
// })
rl.question("What is your \"name\"?\n", answer =>{
    sayHello(answer)
    rl.close()
})
/**
 * Says Hello based on name length
 * @param {string} nameToSay 
 */
function sayHello(nameToSay) {
    //casting the type makes sure the variable type is what we want it to be i.e. string, object, array, number 
    nameToSay = String(nameToSay)
    if (nameToSay.length < 5 || nameToSay.startsWith("X")) {
        console.log("Hello, " + nameToSay);
    } else if (nameToSay.length === 7) {
        console.log(nameToSay + ", don't speak!");
    } else {
        console.log("Howdy, " + nameToSay);
    }
}