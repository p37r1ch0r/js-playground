const readLine = require("readline")
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("What is your \"name\"?\n", answer =>{
    console.log(answer)
    rl.close()
})