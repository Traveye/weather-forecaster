//doc selectors
const buttonEl = document.querySelector("#click")
const userInput = document.querySelector('#city-search')
const currentEl = document.querySelector('#current')
const fiveDayEl = document.querySelector('#five-day')
var cityList = [];

//resets buttons from local storage at page load
function pageInitial() {
    var oldCity = JSON.parse(localStorage.getItem("city"))
    for(i = 0; i < oldCity.length; i++) {
        var listEl = document.querySelector('#list');
        var listItem = document.createElement('button');
        listItem.textContent = oldCity[i];
        listItem.classList.add('list-button');
        listItem.setAttribute("class",'button is-fullwidth')
        listEl.appendChild(listItem);

        listItem.addEventListener("click", function(){
            var city = listItem.textContent;
            getCurrent(city)
            getFiveDay(city)
        });
      };

}

//this triggers search / sets local storage / triggers api calls
buttonEl.addEventListener("click", function(){
    city = userInput.value
    if(cityList.includes(city)) {
        console.log("repeat")
    }
    else{
        cityList.push(city)
        localStorage.setItem("city", JSON.stringify(cityList));
    }
    
    previosSearch(city)
    getCurrent(city);
    getFiveDay(city)
})

// this sets the newer recent search buttons after reload
function previosSearch(city) {

        var listEl = document.querySelector('#list')
        var listItem = document.createElement('button')
        listItem.textContent = city
        listItem.classList.add('list-button')
        listItem.setAttribute("class",'button is-fullwidth')
        listEl.appendChild(listItem) 

    

        listItem.addEventListener("click", function(){
            var city = listItem.textContent;
            getCurrent(city)
            getFiveDay(city)
        });
        

    }
    


// this is current weather api call and renders to page
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
        tempRender.textContent = "Temp: " + temp + " \u2109";
        windRender.textContent = "Wind: " + wind + " mpy";
        humidityRender.textContent = "Humidity: " + humidity + " %";
        
        
        currentEl.appendChild(placeNameRender);
        currentEl.appendChild(displayTimeRender);
        currentEl.appendChild(iconRender)
        currentEl.appendChild(tempRender);
        currentEl.appendChild(windRender);
        currentEl.appendChild(humidityRender);
       

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

        fiveDayEl.innerHTML = "";

        for(i = 3; i < data.list.length; i += 8) {
            var temp = data.list[i].main.temp
            var wind = data.list[i].wind.speed
            var humidity = data.list[i].main.humidity
            var time = data.list[i].dt
            var displayTime = dayjs.unix(time).format("MM-DD-YYYY");  

            var icon = data.list[i].weather[0].icon
            var iconUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";


            

            
            var cardHolder = document.createElement('div')
            cardHolder.classList.add('cards')
            fiveDayEl.append(cardHolder)

            

            var placeNameRender = document.createElement('p');
            var displayTimeRender = document.createElement('p');
            var tempRender = document.createElement('p');
            var windRender = document.createElement('p');
            var humidityRender = document.createElement('p');

            var iconRender = document.createElement('img');
            iconRender.setAttribute('src', iconUrl);

        
            displayTimeRender.textContent = displayTime;
            tempRender.textContent = "Temp: " + temp + " \u2109";
            windRender.textContent = "Wind: " + wind + " mph";
            humidityRender.textContent = "Humidity: " + humidity + " %";
            
            
            cardHolder.appendChild(placeNameRender);
            cardHolder.appendChild(displayTimeRender);
            cardHolder.appendChild(iconRender)
            cardHolder.appendChild(tempRender);
            cardHolder.appendChild(windRender);
            cardHolder.appendChild(humidityRender);

            

        }
       
    });
}
    

pageInitial();