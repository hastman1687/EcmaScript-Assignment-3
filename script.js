// Task 1: Modify an Array Element
// Create an array containing 3 fruit names.
// Change the second fruit to a new fruit.

var fruits = ["Apple","Mango","Grapes"];
fruits[1] = "Banana";
console.log(fruits[1]);






// Task 2: Try Changing a Character in a String
// Create a string variable with your name.
// Try to change the first character of the string

var myName = "Hastman";
var newName ="Y" + myName.slice(1); // the newName will show "Y" + "astman" as .slice method will start from index 1 of myName
console.log(newName);







// Task 3: Replace the Whole String
// Assign a completely new string value to the same variable
// Print the string to the console.

myName = "new string value";
console.log(myName);







// Task 4: Use pop(), unshift(), and shift() on an Array
// Create an array of colors with 3 values.
// Use pop() to remove the last item and print the array.
// Use unshift() to add a new color at the beginning and print the array.
// Use shift() to remove the first item and print the array.

var colors = ["red","blue","green"];
colors.pop();
console.log(colors);

colors.unshift("yello");
console.log(colors);

colors.shift();
console.log(colors);