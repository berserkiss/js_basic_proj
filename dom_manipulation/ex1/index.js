const title = document.querySelector("#main-heading")
//inline style
// title.style.color ='red'
// title.style.fontSize = '4em'

//create elements

const ul = document.querySelector('ul')
const li = document.createElement('li')
//adding el
ul.append(li)

//modify text 
//innerText - just text
//textContent - new lines
//innerHTML = html tags + text

li.textContent = "10 reasons to hate you"

li.setAttribute('class', 'list-item')

//remove attribute

//li.removeAttribute('id')

//get attribute 

title.getAttribute("id")

//for classes adding attributes 

li.classList.add('fun-list')

li.classList.remove('fun-list')

li.classList.contains('fun-list')

li.remove()

//parent node 
//father and grandfather

console.log(ul.parentNode)
console.log(ul.parentElement.parentElement)


//child node
//text + tags + comments, first is text
console.log(ul.childNodes)

console.log(ul.firstChild)

console.log(ul.lastChild)


//returns an html collection

console.log(ul.children)

console.log(ul.firstElementChild)

//siblings: .nextSibling, .previousSibling; .nextElementSibling, .nextElementSibling 

