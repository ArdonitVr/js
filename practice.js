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