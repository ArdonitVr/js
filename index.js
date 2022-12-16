console.log(fetch("https://jsonplaceholder.typicode.com/users/1"))

//then


fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
    console.log(response.json())
})





fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
    response.json().then(data => {
        console.log(data)
        emailRef.innerHTML = data.address.street
    })
})


//best practice -> of "then"


fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
    return response.json()
})
.then(data => {
    console.log(data)
    emailRef.innerHTML = data.email
})


const emailRef = document.querySelector(".email")
console.log(emailRef)

//Async/Await -->

async function main() {
 const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
 const data = await response.json()
 console.log(data)
 emailRef.innerHTML = data.email
}

main()



const subRef = document.querySelector('.substatus')
const videoRef = document.querySelector('.video')


function getSubscriptionStatus() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('')

        }, 2000)
    })
}



//then
getSubscriptionStatus().then(response => console.log(response))


//Async/Await




function getVideo(subscriptionStatus) {
    return new Promise((resolve, reject) => {
        if (subscriptionStatus === "VIP") {
        resolve("Show Video")
        }
        else if (subscriptionStatus === "FREE") {
            resolve("Show Trailer")
        }
        else{
            reject("No Video")
        }
    })
}


async function main() {
     const status = await getSubscriptionStatus()
     subRef.innerHTML = status
     try{
         console.log(await getVideo(status))
     }
     catch (e) {
        console.log(e)
        videoRef.innerHTML = e
     }

}
main()