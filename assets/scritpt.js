const buttonEl = document.querySelector(".findCity")
var cityList = [];

function getApi() {
    var url = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=5e2060eedf6abe8e55c023dfb119a674";
    
  
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {

        console.log(data);
      
      });
  }

// Search for a city: 

getApi();
//need to store user input in var

// var cityInput = document.querySelector('.cityInput').value.trim();
// localStorage.setItem("city", cityInput)
// createList();

// }

// function createList() { 
    
// var addCity = localStorage.getItem("city")
// if(!cityList.includes(addCity)) {
//     cityList.push(addCity);
// }

// console.log(cityList)

// for(i = 0; i < cityList.length; i++) {
//     searchedCity = document.querySelector('.cityList')
//     var oldCity = document.createElement('p')
//     oldCity.textContent = cityList[i];
//     console.log(oldCity)
//     searchedCity.appendChild(oldCity)

// }

// }

// //store in local storage / add to empty var
// //need to creante new element with var as text content
// //append to class cityList


//   buttonEl.addEventListener('click', getApi);