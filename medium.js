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