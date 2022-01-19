
const Url = 'https://frontend-take-home.fetchrewards.com/form'
// const Http = new XMLHttpRequest()

function getEndpoints(myURL) {
    // Http.open("GET", myURL)
    // Http.send()
    fetch(myURL)
        .then(response => { return response.json() })
        .then(data => {
            for (let i of data.occupations) {
                let occupationId = document.getElementById("occupationId")
                let occupationList = document.createElement("option")
                occupationList.text = `${i}`
                occupationId.append(occupationList)
            }
                for(let j of data.states){
                    let stateId = document.getElementById("stateId")
                    let stateList = document.createElement("option")
                    stateList.text = `${j.abbreviation}`
                    stateId.append(stateList)
                   
                }

        })
}

getEndpoints(Url)

let btn = document.getElementById("btn")


    // Http.open("POST",Url)
    // Http.send()

let nameInput = document.getElementById("Name").value
let email = document.getElementById("Email").value
let password = document.getElementById("Password").value
let occupationId = document.getElementById("occupationId").value
let stateId = document.getElementById("stateId").value

btn.addEventListener("click", function(event){
    event.preventDefault()
let data = {
    name : `${nameInput}`,
    email: `${email}`,
    password: `${password}`,
    occupation: `${occupationId}`,
    state: `${stateId}`
}

// console.log(JSON.stringify(data))

fetch(Url,{
    method: "post",
    headers: {"Content_type": "application/json"},
    body: JSON.stringify(data)
})
    .then(response => response.text().then(console.log))
    // .then(json => console.log(json))
    .catch(err => console.log(err))
})






