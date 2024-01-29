//create an alert/prompt to pop up as soon as someone opens page prompting them to input their order as a list of comma-separated froyo flavors.

let customerOrder = prompt(
  "Please enter your order as a list of comma-separated flavors (Ex: vanilla,chocolate,raspberry)"
);

console.log(customerOrder)
//chocolate,vanilla,vanilla,raspberry

//take order list and convert it into an array of strings
// const order = customerOrder
// const orderArray = customerOrder.split(",")

const orderArray = customerOrder.split(",")
console.log(orderArray)


//create an object to keep a count of how many orders there are of each [i]
//have the program correctly count the number of each flavor is in the customer's order
const flavorCount = {};

//create a loop to iterate through the array of flavors
for (let i=0; i<orderArray.length; i++){
  // console.log(orderArray[i])
  const flavorsSoFar = Object.keys(flavorCount)
  if(flavorsSoFar.includes(orderArray[i])){
    flavorCount[orderArray[i]] = flavorCount[orderArray[i]] + 1
  }
  else{
    flavorCount [orderArray[i]] = 1
  }
}

console.table(flavorCount)

//organize this loop logic into a function that returns an object
//display their order in a table inside the browser
//make sure to check your code by changing the order and seeing how it changes outu output