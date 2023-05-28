//Targets and variables
const searchBox = document.querySelector("#searchbox");
const searchBtn = document.querySelector(".searchBtn");
const currentCity = document.querySelector(".currentCity");
let temperature = document.querySelector(".temperature");
let windSpeed = document.querySelector(".windSpeed");
let humidity = document.querySelector(".humidity");
let feelsLike = document.querySelector(".feelsLike");
let city = searchBox.value
//functions
const getCity = () => {
//   e.preventDefault();
  city = searchBox.value.charAt(0).toUpperCase() + searchBox.value.substr(1 , searchBox.value.length)
  currentCity.innerHTML = city
  fetchWeather(city)
  console.log(city)
  searchBox.value=''
};

//Events
searchBtn.addEventListener("click", getCity);

//Weather API
const fetchWeather = async (city) => {
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "53bd57b6b9mshaa86442cf6439e1p184fa1jsnc3fb37d4481e",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(typeof result);

	//Parsing result to object which was string earlier
	let weatherObj = JSON.parse(result)
	console.log(weatherObj) //displaying object
	//customizing display of weather
	temperature.innerHTML = `Temperature: ${weatherObj.temp} &deg; C`
	windSpeed.innerHTML = `Wind Speed: ${weatherObj.wind_speed} km/h`
	humidity.innerHTML = `Humidity: ${weatherObj.humidity} %`
	feelsLike.innerHTML = `Feels Like: ${weatherObj.feels_like} &deg; C`
  } catch (error) {
	alert('error')
  }
};

getCity()
