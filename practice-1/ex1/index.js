// Create two variables, firstName and lastName

// Concatenate the two variables into a third variable called fullName

// Log fullName to the console

let firstName = "Ann"
let lastName = "Puzyrova"

let fullname = firstName + " " + lastName

console.log(fullname)

let Name = "Linda"
let greeting = "Hi there"

function msg() {
    console.log(greeting + "," + " " + Name)
}

msg()

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable

let point = 3

function add3Points() {
    point +=3
}

function remove1Point() {
    point-=1
}

add3Points()
add3Points()
add3Points() 
remove1Point()
remove1Point()
console.log(point)


console.log("2" + 2) // 22
console.log(11 + 7) // 18
console.log(6 + "5") // 65
console.log("My points: " + 5 + 9) //59
console.log(2 + 2) //4 
console.log("11" + "14") // 1114


// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".


let errorMsg = document.getElementById("error")

function renderMsg()
{
    errorMsg.textContent = "Something went wrong, please try again" 
}

