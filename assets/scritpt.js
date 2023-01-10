const buttonEl = document.querySelector(".findCity")

function getApi() {
    var url = "https//:api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=5e2060eedf6abe8e55c023dfb119a674"
  
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {

        console.log(data);
      
      });
  }
  buttonEl.addEventListener('click', getApi);