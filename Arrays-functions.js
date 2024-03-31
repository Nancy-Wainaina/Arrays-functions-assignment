// Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order
function reversedStringsArray(arr){
    const reversedStrings = arr.map(str =>
        [...str].reverse().join(""));
        console.log(reversedStrings);
}
reversedStringsArray(["Marsabit", "Kajiado", "Moyale", "Somalia"]);




// Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero
function numbers(){
    let array = [5, 10, 12, -7, 0, -13, 5, 4, 11, -3,];
    array.forEach(x =>{
        if (x > 0){
            console.log(x +"Positive");
        }else if (x < 0){
            console.log(x +"Negative");
        }else {
            console.log(x +"Zero");
        }
    })
}
numbers()





// Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.

function employee(){
    const employees = [{
        name: "Nancy Wainaina",
        ID: 42318200,
        salaryProperty: 100000

    },
    {
        name: "Mercy Mutuku",
        ID: 22575504,
        salaryProperty: 50000
    }

     ]
     console.log(employees.sort((one, two)=> one.salaryProperty - two.salaryProperty));

}
employee()





// Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.

function nums(){
    const values = [10, 20, 30, 40, 50];
    values.forEach((i) =>{
        console.log(i*2);
    }


)}
nums()


// Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
function multiplyAdd(){
const integers = [4, 6, 8, 9, 12, 45,];
integers.slice(0,4).forEach((y) =>{
    console.log(y*8);
});
integers.slice(-2).forEach((y) =>{
    console.log(y+5);
})


}
multiplyAdd()