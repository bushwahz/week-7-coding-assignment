/* 
------------------
  STEP 1
------------------
*/

// Declare & define array
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Define the length of array
let lengthOfAges = ages.length;

// Call first & last elements of array and find difference
let agesDifference = ages[ages.length - 1] - ages[ages.length - ages.length];

// Output the difference
console.log(agesDifference);

// Push new element to end of array
ages.push(10);

// Declare new element in array
let newAge = ages[ages.length - 1];

// Call first & last elements of array and find difference again
let agesDifference2 = newAge - ages[ages.length - ages.length];

// Output the new difference
console.log(agesDifference2);

// Loop through ages array to find average
let sum = 0;
for(let i = 0; i < ages.length; i++) {
  sum += ages[i];
}
let average = sum / ages.length;

// Output the average
console.log(average);

/* 
------------------
  STEP 2
------------------
*/

// Declare & define array
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

// Loop through age array to find average letters per name
let nameSum = 0;
for (let i = 0; i < names.length; i++) {
  nameSum += names[i].length
}
let averageChar = nameSum / names.length;

// Output the average
console.log(averageChar);

// Concatenate all array names together
let combineNames = "";
for (let i = 0; i < names.length; i++) {
  combineNames += names[i] + " ";
}

// Output the string
console.log(combineNames);

/* 
------------------
  STEP 3
------------------
*/

console.log(`
How do you access the last element of any array?
Answer: arrayName[arrayName.length - 1]
`);

  /* 
  ------------------
    STEP 4
  ------------------
  */

console.log(`How do you access the first element of any array?
Answer: arrayName[0]`);

/* 
------------------
  STEP 5
------------------
*/

// Loop through the array & add the length of each name
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length);
}
// Output the array
console.log(nameLengths);

/* 
------------------
  STEP 6
------------------
*/

// Loop through the array and calculate the sum of all the elements
let sumOfLengths = 0;
for (let i = 0; i < nameLengths.length; i++) {
  sumOfLengths += nameLengths[i];
}

// Output the sum
console.log(sumOfLengths);

/* 
------------------
  STEP 7
------------------
*/

// Create function for word and concatenatation
function concatWord (word,n) {
  return word.repeat(n);
}

// Output the function
console.log(concatWord("Bonjour", 3));

/* 
------------------
  STEP 8
------------------
*/

// Create function for name concatenatation
function writeName (firstName,lastName) {
  return fullName = firstName + " " + lastName;
}

// Output the function
console.log(writeName("Mike", "Smith"));

/* 
------------------
  STEP 9
------------------
*/

// Create and define number array
let numArray = [1,2,3,4,5];

// Loop through array for sum
let sum1 = 0;
for (let i = 0; i < numArray.length; i++) {
  sum1 += numArray[i];
}

// Output the sum
console.log(sum1);

// Function to check if sum is greater than 100
function sumOfArray () {
  if (sum1 > 100) {
    return true;
  } else {
    return false;
  }
}

// Output the function
console.log(sumOfArray(numArray));

/* 
------------------
  STEP 10
------------------
*/

// Loop through above number array to find average
let numArraySum = 0;
for(let i = 0; i < numArray.length; i++) {
  numArraySum += numArray[i];
}
let numArrayAvg = numArraySum / numArray.length;

// Output the average
console.log(numArrayAvg);

/* 
------------------
  STEP 11
------------------
*/

// Declare & define array 1
let arr1 = [7,2,8,6];

// Loop through array 1 and find average
let arr1Sum = 0;
for(let i = 0; i < arr1.length; i++) {
  arr1Sum += arr1[i];
}
let arr1Avg = arr1Sum / arr1.length;

// Output the average
console.log(arr1Avg);

// Declare & define array 2
let arr2 = [6,4,6,3];

// Loop through array 2 and find average
let arr2Sum = 0;
for(let i = 0; i < arr2.length; i++) {
  arr2Sum += arr2[i]
}
let arr2Avg = arr2Sum / arr2.length;
// Output the average
console.log(arr2Avg);

// Create function to compare array averages
function compareArrayAvg (arr1Avg, arr2Avg) {
  if (arr1Avg > arr2Avg) {
    return true;
  } else {
    return false;
  }
}
// Output the function
console.log(compareArrayAvg(arr1Avg, arr2Avg));

/* 
------------------
  STEP 12
------------------
*/

// Create function for decision to buy drink
function willBuyDrink (isHotOutside, moneyInPocket) {
  if (isHotOutside && moneyInPocket >= 10.50) {
    return true;
  }
}

// Enter arguments & output function
console.log(willBuyDrink(11,12));

/* 
------------------
  STEP 13
------------------
*/

// Function to make decision to work for a company

// Declare & define variables
const annualSalary = "$50,000";
const advancementOpporunities = true;
const greatEnvironment = true;
const offersBenefits = true;

// I think it would be practical to collect & store variables of data about a company and what they offer to employees in order to calculate if the decision to work for the company is a good one.

// Create function to make decision to work for a company
function willWorkForCompany () {
  if (annualSalary >= "$70,000" && advancementOpporunities == true && greatEnvironment == true && offersBenefits == true ) {
    return "yes!";
  } else {
    return "heck no!";
  }
}

// Output the function
console.log("Should I work for this company?: " + willWorkForCompany());