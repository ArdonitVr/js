//show rating

function showRating(rating) {
    let string = ''
    for (i = 0; i < Math.floor(rating); i++) {
        string = string + "*"
        if (i !== Math.floor(rating - 1)) {
            
            string = string + " "
        }
    }
//Number.isInteger() --> checks if the number is an int
        if(!Number.isInteger(rating) ) {
            string = string + " ."
        }
        
        return string
    }

console.log(showRating(8.5))




//sort by lowest to highest price

function sortLowToHigh (arr) {

    //sorting the array in order highest to lowest arr.sort((a,b) => (a - b))/ (b-a) --> highest to lowest
    return arr.sort((a , b) => (a - b))
}
console.log(sortLowToHigh([2,55,22332,44,553,2]))



//sort by highest to lowest price 
function sort(num) {
    return num.sort((a , b) => (b.price - a.price))
}
console.log(sort([
    {id : 1, price: 50},
    {id : 2, price: 0},
    {id : 3, price: 500}
]))



//Find all the posts by a single user
//PROMISES


async function postByUser(userId) {
   const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()
    const posts = data.filter(elem => elem.userId === userId)
    console.log(posts)
    
}
postByUser(4)





//first 6 incomplete todos

async function firstSixIncomplete() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    let data = await response.json()
    const todos = data.filter(elem => elem.completed === false).slice(0, 6)
    console.log(todos)
}
firstSixIncomplete()