// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

describe("codedMessage", () => {
    it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0", () => {
const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
  })

  // ReferenceError: codedMessage is not defined

// b) Create the function that makes the test pass.

// PseudoCode:
// Declare a function called codedMessage
// Set a parameter as string
// Declare a variable called arrayOne
// Utilize .split to convert the string into an array
// Declare a variable called arrayTwo
// Utilize .map to iterate through each value in the array
// Use conditional statements to determine the values that need replacement
// if value === "a", return value = 4
// else if value === "e", return value = 3
// else if value === "i", return value = 1
// else if value === "o", return value = 0
// else return value 
// Utilize .join to convert the mapped array into a string
// Test the function


const codedMessage = (string) => {
     let arrayOne= string.split('')
     let arrayTwo= arrayOne.map ((value) => {
     if (value.toUpperCase() === "A"){
        return value = 4 
     }else if (value.toUpperCase() === "E"){
        return value = 3
     }else if (value.toUpperCase() === "I"){
        return value = 1
    }else if (value.toUpperCase() === "O"){
        return value = 0
    }else{
return value 
}
 })
return arrayTwo.join('')
}

//Test Suites: 1 passed, 1 total

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("arrayOfWords", () => {
 it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter.", () => {
const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

expect(arrayOfWords(fruitArray,letterA)).toEqual(["Mango", "Apricot", "Peach"])
expect(arrayOfWords(fruitArray,letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
})
})

//ReferenceError: arrayOfWords is not defined

// b) Create the function that makes the test pass.

// PsuedoCode:
// Declare a function called arrayOfWords
// Set the parameters letter and array 
// Utilize .filter to iterate through each value 
// Utilize .include to return the values that contain the letter 
// Test the function

const arrayOfWords = (array, letter) => {
  return array.filter (word => {
  return word.toLowerCase().includes(letter)
 })
}

//Test Suites: 1 passed, 1 total

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("fullHouse", () => {
 it("takes in an array of 5 numbers and determines whether or not the array is a full house", () => {
const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

expect(fullHouse(hand1)).toEqual(true)
expect(fullHouse(hand2)).toEqual(false)
expect(fullHouse(hand3)).toEqual(false)
})
})

// ReferenceError: fullHouse is not defined

// b) Create the function that makes the test pass.

// PsuedoCode;
// Declare a function called fullHouse
// Set the parameter array
// Create a for loop to interate through each value in the array
// Utilize conditionals to determine if the array is a full house
// if [0] === [1] ===[2] && [3] === [4], return true
// else return false 


const fullHouse = (array) => {
  for (let i=0; i < array.length; i++)
  if ((array[0] === array[1]) && (array[1] === array[2]) && (array[3] === array[4])) {
return true
  } else {
return false 
}
 }

 // Test Suites: 1 passed, 1 total
