console.log("This is my own module");

function arraySum(arr) {
let sum = 0;
arr.forEach(element => {
    sum += element;
});
return sum;
}

module.exports = {
    arraySum: arraySum,
    name: "pulkit",
    age: 20
}