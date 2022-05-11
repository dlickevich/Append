"use strict"

var app = document.getElementById("app")
var vardas = document.querySelectorAll("input")[0]
var pavarde = document.querySelectorAll("input")[1]
var amzius = document.querySelectorAll("input")[2]

var submit = document.querySelectorAll("input")[3]



submit.addEventListener("click", function(e){
    e.preventDefault()
var newElement = document.createElement("div")
if(vardas.value) {
    newElement.innerHTML = 
    
      ` <h3 class="tekstas">${vardas.value}</h3>`
       
   app.append(newElement)
  vardas.value = ""
    
    }

if(pavarde.value) {
    newElement.innerHTML = 
    `
        <h3 class="tekstas">${pavarde.value}</h3>
       
      `
app.append(newElement)
  pavarde.value = ""
    }

if(amzius.value) {
    newElement.innerHTML = 
    `
        <h3 class="tekstas">${amzius.value}</h3>
       
      `
app.append(newElement)
amzius.value = ""
 }


})


