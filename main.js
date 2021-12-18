// api.openweathermap.org/data/2.5/weather?q=tehran&appid=edc228562ac0a8aa3116d41c0687cf56&units=metric

const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");

const apiKey = "edc228562ac0a8aa3116d41c0687cf56";

form.addEventListener("submit", e => {
    e.preventDefault();
    let inputVal = input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const { main, name, sys, weather } = data;
            const li = document.createElement("li");
            li.classList.add("city");
            const markup = `
            <div class='city'>
                <h2 class='city-name'>
                    <span>${name}</span>
                    <sup>${sys.country}</sup>
                </h2>
                <div class='city-temp'>${Math.round(main.temp)}&deg;</div>
                <h3>${weather[0]["description"]}</h3 
            </div>
            `;
            li.innerHTML = markup;
            list.appendChild(li);
            msg.innerText = "";
        })
        .catch(() => {
            msg.innerText = "Search for a valid city"
        })
    input.value = ""
})