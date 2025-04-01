let pas1 = document.getElementById("pas-1")
let pas2 = document.getElementById("pas-2")
let pas3 = document.getElementById("pas-3")
let pas4 = document.getElementById("pas-4")
function RandomId() {
    return Math.floor((Math.random() * 95) + 32)
}

function RandomLen() {
    return Math.floor((Math.random() * 4) + 8)
}

function generatePass() {
    let len = RandomLen()

    let pas = ""


    for (let i = 0; i < len; i++)
    {
        let num = RandomId()
        console.log(num)
        pas += String.fromCharCode(num)

        console.log(pas)

    }
    return pas

}
function StartGenerating() {
     let pass1 = generatePass()
     let pass2 = generatePass()
     let pass3 = generatePass()
     let pass4 = generatePass()
     pas1.value = pass1
     pas2.value = pass2
     pas3.value = pass3
     pas4.value = pass4

}

