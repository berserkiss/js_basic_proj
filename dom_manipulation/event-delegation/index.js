//event DELEGATION (ДЕЛЕГИРОВАНИЕ СОБЫТИЙ) allows a user to append a single event listener to a parent element that adds it
// to all its present and future descendants 
// that match a selector 
//ставим один обработчик на общего предка

//event PROBAGATION -вспытие и перехват (исп встплытие чаще)

//function(e) - e - event object 
//e.target - то, к чему было применено событие 

let unList = document.querySelector(".list-container")

unList.addEventListener("click", function(e) {
    console.log(`${e.target.getAttribute('id')} is clicked`)

    const target = e.target

    if(target.matches('li')) {
        target.style.backgroundColor = 'lightgrey'
    }
})

const newItem = document.createElement('li')
newItem.textContent = "You are dumb"
newItem.setAttribute('id', "dumb")
newItem.classList.add('list-item')

unList.append(newItem)

