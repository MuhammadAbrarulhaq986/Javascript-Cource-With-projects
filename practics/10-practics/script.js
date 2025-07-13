

let result = document.querySelector(".js-button").classList.contains('js-button');

console.log(result);
/////////////////////////////////////////////////////////
function gaming() {
    const buttonEle = document.querySelector(".game-btn-js");

    if (buttonEle.innerText === "Gamer go online") {
        buttonEle.innerHTML = "Gamer is offline";
        buttonEle.classList.add("is-offline");
    } else {
        buttonEle.innerHTML = "Gamer go online";
        buttonEle.classList.remove("is-offline");
    }
}

/////////////////////////////////////////////////////////
function games() {
    const buttonEle = document.querySelector(".games-btn-js");

    if (buttonEle.innerText === "Games") {
        buttonEle.innerHTML = "Games is offline";
        buttonEle.classList.add("is-games");
    } else {
        buttonEle.innerHTML = "Games";
        buttonEle.classList.remove("is-games");
    }
}

/////////////////////////////////////////////////////////
function music() {
    const buttonEle = document.querySelector(".music-btn-js");

    if (buttonEle.innerText === "Music") {
        buttonEle.innerHTML = "Music is offline";
        buttonEle.classList.add("is-music");
    } else {
        buttonEle.innerHTML = "Music";
        buttonEle.classList.remove("is-music");
    }
}

/////////////////////////////////////////////////////////
function tech() {
    const buttonEle = document.querySelector(".tech-btn-js");

    if (buttonEle.innerText === "Tech") {
        buttonEle.innerHTML = "Tech is offline";
        buttonEle.classList.add("is-tech");
    } else {
        buttonEle.innerHTML = "Tech";
        buttonEle.classList.remove("is-tech");
    }
}

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
function oneAtATime(buttonType) {
    let gamebtn = document.querySelector(".js-game-btn")
    let musicbtn = document.querySelector(".js-music-btn")
    let techbtn = document.querySelector(".js-tech-btn")

    gamebtn.classList.remove("active");
    musicbtn.classList.remove("active");
    techbtn.classList.remove("active");

    if (buttonType === "game") {
        gamebtn.classList.add("active");
    } else if (buttonType === "music") {
        musicbtn.classList.add("active")
    } else if (buttonType === "tech") {
        techbtn.classList.add("active")
    }
}
/////////////////////////////////////////////////////////
function costKeyDown(event) {
    //console.log(event.key);
    if (event.key === "Enter") {
        calculateTotal();
    }
}

function calculateTotal() {
    const inputElement = document.querySelector(".js-cost-input");

    let cost = Number(inputElement.value);
    if (cost < 0) {
        document.querySelector(".js-cost-total").innerHTML = "Invalid Cost!😣"
    } else if (cost < 40) {
        cost = cost + 10;
        document.querySelector(".js-cost-total").innerHTML = `$${cost}`
    } else {
        document.querySelector(".js-cost-total").innerHTML = `$${cost}`

    }
}