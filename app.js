/*
let arr = [28, 20, 10, 22, 40]

let newArr = arr.filter((element) => element < 30
)

console.log(newArr)



let grades = ['A+', 'A', 'FAIL']

let failGrades = grades.filter(element => element !== 'FAIL')

console.log(failGrades)



let grades2 = ['FAIL','FAIL','B']

let failgrades2 = grades2.filter((element) => {
    
    return element !== 'FAIL'
})
console.log(failgrades2)



let char = ['A','B','FAIL']

let goodgrades = []

for( i = 0; i < char.length; i++){
    
    if(char[i] !== 'FAIL') {
        goodgrades.push(grades[1])
    }
   
}
console.log(goodgrades) 
*/
/*

let arr = [2, 4, 6, 7]

let newArr = arr.map((element) => "dog")

console.log(newArr)


let dollars = [1, 10, 100]

let cents = dollars.map(element =>  element * 100)

console.log(cents)



let dollars1 = [0, 1, 2]

let cents1 = dollars1.map(element => {
    return element * 100
} 
)

    console.log(cents1)

*/
/*
let dollars = [1,2,3]

let cents = []

for ( i = 0; i < dollars.length; i++) {

  cents.push(dollars[i] * 100)

   
}
console.log(cents) 
*/

/*

let users = [
    {   

        username : 'Ardonit',
        email : 'ardonit.vrella1@gmail.com',
        password : '212121212',
        number : '11911119',
        adress : "Ferizaj",
        lessonsCompleted : [0, 1]
    },
    {
    username : 'AVR',
    email : 'ssasd.vrella1@gmail.com',
    password : '4355454',
    number : '11911119',
    adress : "Ferisaszaj",
    lessonsCompleted : [0, 1, 3, 4]
    }
        
]

function login(email, password) {
    for( let i = 0; i < users.length; i++) {
       
        if(users[i].email === email) {

            console.log(users[i]);
        if(users[i].password === password) {
            console.log('the data is correct')
        }
        else{
            console.log('the password or email is incorrect')
        }
    }
    }
    
}
login('ardonit.vrella1@gmail.com','212121212')






function register(username,email,password,subscriptionStatus,discordId,lessonsCompleted) {
    
}
{
    let user = {
        username: username,
    }
    console.log(user)
}

register('Zen','avr@gmail.com', '122212','VIP','zen0001',[0,1])

*/

/*

document.querySelector('.title').innerHTML += ' Avr'


document.querySelector('.title').style.color = 'red'



function changeTtileToRed() {
    document.querySelector('.title').style.color = 'white'
    console.log('clicked')
}
*/

/*

function toggleDarkMode() {
    document.querySelector('body').classList.toggle("dark-theme")
} */