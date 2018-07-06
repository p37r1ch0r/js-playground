let shoppingList = {
    bananas: 30,
    beefJerky: 5,
    potato: 1
}
console.log(shoppingList)
updateList(shoppingList, "sourCream", 7)
console.log(shoppingList)
let colorList = {

}
colorList = updateList(colorList, "Green", "forest")
console.log(colorList)
// let squared = square(13)
// console.log(squared)
// square(3)
// square(5)
// console.log(shoppingList.bananas)
// console.log(shoppingList["bananas"])
// let shoppingItem = "bananas"
// console.log(shoppingList[shoppingItem])

// shoppingList.cake = "turtle"
// console.log(shoppingList)
// let appleTypes = ["gala", "red delicious", "granny smith"]
// shoppingList.apples = appleTypes
// console.log(shoppingList.apples[1])

// let location = {
//     name: "my house",
//     address: {
//         street: "Crescent Ave",
//         city: "Mesa",
//         state: "Arizona"
//     }
// }

// console.log(location.address.city)
function square(num){
    let newSquaredNumber = num * num
    return newSquaredNumber;
}

function updateList(list, itemName, quantity){
    list[itemName] = quantity
    return list;
}