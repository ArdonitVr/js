//sum of two numbers

function addition(num1,num2) {
    return num1 + num2
}
console.log(addition(-5,-5))



//convert hours into seconds

function convertHoursToSec(h) {
    return h*60*60
}
console.log(convertHoursToSec(2))

//

function hoursIntoSeconds(hour) {
    let minutes = hour * 60;
    let seconds = minutes * 60;
    return seconds
}
console.log(hoursIntoSeconds(2))



//perimeter of a rectangle

function calcPerimeter(width, length) {
    return (2 * width) + (2 * length)
}
console.log(calcPerimeter(6,7))


//area of triangle 


function calcTriangleArea(base, height) {
    return 0.5 * base * height
}
console.log(calcTriangleArea(10,10))


//extend a string

function appendFrontEnd(string) {
    return string + 'FrontEnd'
}
console.log(appendFrontEnd('Apple'))


//greater than 100?

function sumGreaterThan100(num1,num2) {
    if ( num1 + num2 > 100) {
        return true
    }
    else {
        return false
    }
}

//shorter

console.log(sumGreaterThan100(20,10))

function sumGreaterThan100(num1,num2) {
    return num1 + num2 > 100
}
console.log(sumGreaterThan100(29,29))


//less than or equal to zero

function lessThanOrEqualToZero(number) {
    return number <= 0
}
console.log(lessThanOrEqualToZero(-1))


//opposite boolean

function oppositeBoolean(bool) {
    return !bool
}
console.log(oppositeBoolean(true))


//is not the number 0

function isNotZero(num) {
    return num !== 0
}
console.log(isNotZero(5))


//calculate the remainder

function calcRemainder(num1,num2) {
    return num1 % num2
}
console.log(calcRemainder(9,8))


//is the number odd?

function isOdd(num1) {
    return num1 % 2 !== 0
}
console.log(isOdd(1))



//if a number is even return 1, othervise return -1

function booleanInteger(num) {
    if(num % 2 === 0) {
        return 1

    }
    return -1
}
console.log(booleanInteger(1))

//with ternary operator 

function booleanInteger(num) {
   return num % 2 === 0 ? 1: -1
}
console.log(booleanInteger(4))



//check if a user is logged in AND subcribed

function isLoggedInAndSubscribed(string1,string2) {
    if(string1 === 'LOGGED_IN' && string2 === 'SUBSCRIBED') {
        return true
    }
    return false
}
console.log(isLoggedInAndSubscribed('LOGGED_IN','SUBSCRIBED'))

function isLoggedInAndSubscribed(string1,string2){
    return string1 === 'LOGGED_IN' && string2 === 'SUBSCRIBED'
}
console.log(isLoggedInAndSubscribed('LOGGED_IN','SUBCRIBED'))