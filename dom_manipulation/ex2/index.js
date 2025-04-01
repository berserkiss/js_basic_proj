let btn1 = document.querySelector(".box1-btn")

function alertBtn() {
    alert('I love JS!')
}

btn1.addEventListener("click", alertBtn)

//mouseover

let btn3 = document.querySelector(".box3-btn")
let box3 = document.querySelector(".box-3")

function change() {
    box3.classList.add('change-clr')

}

btn3.addEventListener("mouseover", change)

btn3.addEventListener("mouseout", function()
{
    box3.classList.remove('change-clr')
})


const revealBtn = document.querySelector(".reveal-btn")

const hiddenText = document.querySelector(".hidden-content")


function revealContent() {
    if(hiddenText.classList.contains("reveal-btn")) {
        hiddenText.classList.remove("reveal-btn")
    }

    else {
        hiddenText.classList.add("reveal-btn")
    }
}

revealBtn.addEventListener("click", revealContent)