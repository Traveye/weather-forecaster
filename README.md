# weather-forecaster

## Goals
The purpose of this project was to demonstrate an ability to use 3rd party APIs in a deployed site. Using the API Open Weather, the goal was to create an interactive site in which a user could input a city and would be shown the current weather along with a 5 day forecast. The site would be complete once a user:

- Could enter a city and be shown the current weather along with a five day forecast which listed the city name, date, temperature, wind speed, humidity, and icon. 

- Once a city was searched, the city name would remain as an accesible link on page.

- Finally, using local storage, a users previous searches would persist beyond refresh. 

You can acces the depolyed link here! [Weather-Forecaster](https://traveye.github.io/weather-forecaster/)


## Implementation

This project included the use of HTML, CSS, BULMA, JS, and DayJS. I began by creating a rough outline of the HTML including the input field and search button. After adding an event listener, the search button would take the user input and run two fetch queries using Open Weather to obtain the current weather as well as the five day forecast and render them to the page.
For the most part, this project only requried the handling of fecthed data to display for the user but DayJS was a helpful tool in adding the current time and interpreting the unix time data. 

![Landing Page](/assets/forReadme/landing.png)

![First Search](/assets/forReadme/initialResults.png)

Once a search is run, the site generates a button that can be used to run the search again. These searches area also save to locas storage so they persist beyond refresh. For this project, I utilized the CSS framework Bulma and structured the site using their Tile layout strategy.

![Save Searches](/assets/forReadme/savedbuttons.png)

![Search Persistance](/assets/forReadme/persistance.png)


## Usage
NA

## Credits
NA

## License
Mit