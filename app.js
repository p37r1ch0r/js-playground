const sendButton = document.getElementById("send-button")
const nameInput = document.getElementById("name-input")
const outputGreeting = document.getElementById("output-greeting")

sendButton.addEventListener("click", event => {
    outputGreeting.innerText = sayHello(nameInput.value)
})
nameInput.addEventListener("input", event => {
    outputGreeting.innerText = sayHello(nameInput.value)
})
/**
 * Says Hello based on name length
 * @param {string} nameToSay 
 */
function sayHello(nameToSay) {
    //casting the type makes sure the variable type is what we want it to be i.e. string, object, array, number 
    nameToSay = String(nameToSay)
    if (nameToSay.length < 5 || nameToSay.startsWith("X")) {
        return "Hello, " + nameToSay;
    } else if (nameToSay.length === 7) {
        return nameToSay + ", don't speak!";
    } else {
        return "Howdy, " + nameToSay;
    }
}