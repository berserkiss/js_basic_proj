let btn = document.querySelector("#new-quote")
let qoute = document.querySelector(".qoute")

let person = document.querySelector(".person")

const qoutes = [
    {   quote: `"No wonder I am like that."`,
        person: `Plato`
    }, 

    {   quote: `"Do not worry about tomorrow. Worry about now."`,
        person: `Camerone Diaz`
    }, 


    {   quote: `"Barbie size girl and I am not yours"`,
        person: `Barbie`
    }, 


    {   quote: `"Hi, Barbie"`,
        person: `Ken`
    }, 


    {   quote: `"I love life and animals"`,
        person: `Me`
    },
    
    {   quote: `"I do not beleive in faith. I believe in myself."`,
        person: `Abraham Linkoln`
    },
]

btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * qoutes.length)
    qoute.textContent = qoutes[random].quote

    person.textContent = qoutes[random].person

})