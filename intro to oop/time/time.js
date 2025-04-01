let currTime = document.getElementById("dc")

let timer = document.createElement("p")
currTime.append(timer)

function saveTime() {
    let date = new Date()

    let hours = date.getHours()

    hours = (hours < 10) ? "0" + hours : hours


    let minutes = date.getMinutes()

    minutes = (minutes< 10) ? "0" + minutes : minutes

    let seconds = date.getSeconds()

    seconds = (seconds < 10) ? "0" + seconds : seconds



    timer.textContent = `${hours}:${minutes}:${seconds}`

    setTimeout(saveTime, 1000)
}

 saveTime()