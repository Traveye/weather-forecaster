//doc selectors
const buttonEl = document.querySelector("#click")
const userInput = document.querySelector('#city-search')
const currentEl = document.querySelector('#current')
const fiveDayEl = document.querySelector('#five-day')
var cityList = [];





buttonEl.addEventListener("click", function(){
    city = userInput.value
    localStorage.setItem("city", city)
    previosSearch()
    getCurrent(city);
    getFiveDay(city)
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
        var placeName = data.name;
        var currentTime = dayjs();
        var displayTime = currentTime.format('MM-DD-YYYY H:mm');
        var temp = data.main.temp;
        var wind = data.wind.speed;
        var humidity = data.main.humidity;
        var icon = data.weather[0].icon;
        var iconUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        currentRender();

    function currentRender() { 
        var placeNameRender = document.createElement('p');
        var displayTimeRender = document.createElement('p');
        var tempRender = document.createElement('p');
        var windRender = document.createElement('p');
        var humidityRender = document.createElement('p');
        
        //icon only
        var iconRender = document.createElement('img');
        iconRender.setAttribute('src', iconUrl);

        currentEl.innerHTML = '';

        placeNameRender.textContent = placeName;
        displayTimeRender.textContent = displayTime;
        tempRender.textContent = temp;
        windRender.textContent = wind;
        humidityRender.textContent = humidity;
        
        
        currentEl.appendChild(placeNameRender);
        currentEl.appendChild(displayTimeRender);
        currentEl.appendChild(iconRender)
        currentEl.appendChild("Temp: " + tempRender);
        currentEl.appendChild("Wind: " + windRender);
        currentEl.appendChild("Humidity: " + humidityRender);
       

    }

      })
    
}

function getFiveDay(city) {
    fiveDayUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=5e2060eedf6abe8e55c023dfb119a674"
    fetch(fiveDayUrl)
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
        future = []
        var temp = data.list[0].main.temp
        var wind = data.list[0].wind.speed
        var humidity = data.list[0].main.humidity
        var time = data.list[0].dt
        var displayTime = dayjs.unix(time).format("MM-DD-YYYY");

                    

        var icon = data.list[0].weather[0].icon
        var iconUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";


        console.log(temp, wind, icon, displayTime)

        function fiveDayRender() { 
        

        var placeNameRender = document.createElement('p');
        var displayTimeRender = document.createElement('p');
        var tempRender = document.createElement('p');
        var windRender = document.createElement('p');
        var humidityRender = document.createElement('p');

        placeNameRender.textContent = placeName;
        displayTimeRender.textContent = displayTime;
        tempRender.textContent = temp;
        windRender.textContent = wind;
        humidityRender.textContent = humidity;
        
        
        fiveDayEl.appendChild(placeNameRender);
        fiveDayEl.appendChild(displayTimeRender);
        fiveDayEl.appendChild(iconRender)
        fiveDayEl.appendChild("Temp: " + tempRender);
        fiveDayEl.appendChild("Wind: " + windRender);
        fiveDayEl.appendChild("Humidity: " + humidityRender);

        }
       
    });
}
    

