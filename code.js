
const Url = 'https://frontend-take-home.fetchrewards.com/form'

let stateList = document.createElement("option")
let occupationList = document.createElement("option")

let userName = document.getElementById("userName")
let userEmail = document.getElementById("userEmail")
let userPassword = document.getElementById("userPassword")
let occupationId = document.getElementById("occupationId")
let stateId = document.getElementById("stateId")

let btn = document.getElementById("btn")

function submitForm(myUrl){
    fetch(myUrl)
        .then(response => { return response.json() })
        .then(data => {
            for (let i of data.occupations) {

                occupationList.text = `${i}`
                occupationId.append(occupationList)
            }
            for (let j of data.states) {

                stateList.text = `${j.abbreviation}`
                stateId.append(stateList)

            }
            btn.addEventListener("click", function (event) {
                event.preventDefault()
                let data = {
                    "name": `${userName.value}`,
                    "email": `${userEmail.value}`,
                    "password": `${userPassword.value}`,
                    "occupation": `${occupationId.value}`,
                    "state": `${stateId.value}`
                }
    
        if ((userName.value !== '') && (userEmail.value !== '') && (userPassword.value !== '')
                && (occupationId.value !== '') && (stateId.value !== ''))
                {
                fetch(Url, {
                    method: "post",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify(data)
                })
                    .then(response => response.text().then(console.log))
    
                    .catch(err => console.log(err))
                } 
                else{
                    alert("Please fill out all forms!")
                }
            })
        

        })

    }
submitForm(Url)             
  












