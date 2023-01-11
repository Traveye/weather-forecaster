//doc selectors
const buttonEl = document.querySelector("#click")
const userInput = document.querySelector('#city-search')
const currentEl = document.querySelector('#current')
var cityList = [];





buttonEl.addEventListener("click", function(){
    city = userInput.value
    localStorage.setItem("city", city)
    previosSearch()
    getCurrent(city);
})

// this sets the previous search list with buttons
function previosSearch() {
    var oldCity = localStorage.getItem("city")
    console.log(oldCity)
    if(cityList.includes(oldCity)) {
        console.log("repeat")
    }
    else {
        cityList.push(oldCity);
        var listEl = document.querySelector('#list')
        var listItem = document.createElement('button')
        listItem.textContent = oldCity
        listItem.classList.add('list-button')
        listEl.appendChild(listItem)
        

    }
    
}

// this gets current weather
function getCurrent(city) {
    currentUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=5e2060eedf6abe8e55c023dfb119a674"
    fetch(currentUrl)
    .then(function (response) {
        if(!response) {
            //need text to notify user
        }
        else {
            return response.json();
            
            
        }
      })
    .then(function (data) {
        console.log(data)
        var placeName = data.name
        var currentTime = dayjs.format('MM-DD-YYYY H:mm');
        var displayTime = currentTime.format('MM-DD-YYYY H:mm')
        var temp = data.main.temp
        var wind = data.wind.speed
        var icon = data.weather[0].icon

        var placeNameRender = document.createElement("h2")
        var iconRender = document.createElement('p')
        var timeRender = document.createElement('h3')
        var tempRender = document.createElement('h3')
        var windRender = document.createElement('h3')

        

        console.log(placeName, displayTime, temp, wind, icon)

      })

      // city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
    
    
}