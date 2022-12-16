//Falsy or Truthy?

function filterOutFalsy(elem1, elem2) {
   if (!elem1) {
    return elem1
   }
   return elem2
}
console.log(filterOutFalsy(0,500))

//ternary operator

function filterOutFalsy(elem1, elem2) {
    return !elem1 ? elem1 : elem2
}
console.log(filterOutFalsy(0,100))



//return the length of any given array

function arrLength(arr){
    return arr.length
}
console.log(arrLength([1,2,3]))


//get the last element of an array


function lastElem(arr){
    return arr[arr.length-1]
}
console.log(lastElem([1,2,3,4]))


//find the sum of an rray

function summArray(arr) {
    let sum = 0
    for ( i = 0; i < arr.length; i++ ) {
        sum = sum + arr[i]
    }
    return sum
}
console.log(summArray([1,1,1]))



//add up the numbers from a single number

function progressiveSum(num) {
    let sum = 0
    for (i = 1; i <= num; i++) {
        sum = sum + i
    }
    return sum
}
console.log(progressiveSum(3))


//calculate the time

function calcTime(seconds) {
    let timerMinutes = Math.floor(seconds / 60)
    let timerSeconds = seconds % 60
    
    //putting a zero before one digit numbers or minutes
    if (timerMinutes.toString().length === 1) {
        timerMinutes = '0' + timerMinutes

    }
    return timerMinutes + ':' + timerSeconds
}
console.log(calcTime(90))



//find the largest number

function getMax(arr) {
    let max = arr[0]

    for(i = 0; i < arr.length; i++) {

        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max

}
console.log(getMax([1,2,7,4,3]))


//reverse a string

//incrementing loop example
function reverseString(str) {
    let reverseString = ''
    for(i = 0; i < str.length; i++){
        reverseString = str[i] + reverseString
    }
    return reverseString
}
console.log(reverseString('abc'))

//decrementing loop example
function reverseString(str) {
    let reverseString = ''
    for(i = str.length - 1; i >= 0; --i){
        //reverseString += str[i]
        reverseString = reverseString + str[i]
    }
    return reverseString
}
console.log(reverseString('abc'))

//using reversve property example
function reverseString(str) {
    //split('') converts string into array
    //join('') converts array into string
    //reverse() reverses the arra
    return str.split('').reverse().join('')
}
console.log(reverseString('Ardonit'))



//turn every element in an array into 0

//with for llop example
function covertToZero(arr) {
    newArray = []
    for (i = 0; i < arr.length; i++)
    newArray[i] = 0
    return newArray
}
console.log(covertToZero([1,33,544]))

//array fill example
function covertToZero(arr) {
    return new Array(arr.length).fill(0)
}
console.log(covertToZero([3,4,5,6,7]))


//array map example
function covertToZero(arr) {
    //.map(elem => elem = 0)
    return arr.map(elem => 0)
}
console.log(covertToZero([4,5,3,4,9]))



//filter out all the apples

//for loop example
function removeApples(arr) {
    let newArray = []
    for (i = 0; i < arr.length; i++) {
        if(arr[i] !== 'Apples') {
            newArray.push(arr[i])
        }
    }
    return newArray

}
console.log(removeApples(['Apples','Bananas','Pears']))


//arr filter example
function removeApples(arr) {
    return arr.filter(elem => elem !== "Apples")

}
console.log(removeApples(['Apples','Bananas','Pears']))




//filter out all the falsy values

function filterOutFalsy(arr) {
    let newArray = []
    for (i = 0; i < arr.length; i++) {
        if (!!arr[i] === true) {
            newArray.push(arr[i])
        }
    }
    return newArray
}
console.log(filterOutFalsy([false,0,'abcs',undefined,8]))


//arr filter example


function removeFalsy(arr) {
    return arr.filter(elem => !!elem === true)

}
console.log(removeFalsy([0,'Bananas','Pears',null,undefined,5]))




//truthy to truthy, falsy to falsy

function convertToBoolean(arr) {
  return arr.map(elem => !!elem)
}
console.log(convertToBoolean([0,'Bananas','Pears',null,undefined,5]))