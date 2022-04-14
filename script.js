const weatherBtn = document.getElementById('show-weather')
const userInput = document.getElementById('zipcode')
const api_Key = '2509ec90a8034ff2caa33987f3801a09'
let zip;

let cityName = document.getElementById('city-name')
let latitude = document.getElementById('lat')
let longitude = document.getElementById('lon')
let main = document.getElementById('weather-main')
let description = document.getElementById('weather-desc')
let windSpeed = document.getElementById('wind-speed')
let degree = document.getElementById('wind-degree')
let currentTemp = document.getElementById('temp-current')
let minTemp = document.getElementById('temp-min')
let maxTemp = document.getElementById('temp-max')
let humidity = document.getElementById('humidity')

weatherBtn.addEventListener('click', getWeather)


async function getWeather() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }
  const api = 'https://api.openweathermap.org/data/2.5/weather?zip=' + userInput.value + '&appid=b4df3ed3e2eafd5e3a1955f4baf89a71'
  const res = await fetch(api, config)
  const data = await res.json()
  if (data.name == null) {
    alert('Invalid Zipcode ' + userInput.value)
  } else {

    cityName.innerHTML = data.name
    latitude.innerHTML = data.coord.lat
    longitude.innerHTML = data.coord.lon
    main.innerHTML = data.weather[0].main
    description.innerHTML = data.weather[0].description
    currentTemp.innerHTML = data.main.temp
    minTemp.innerHTML = data.main.temp_min
    maxTemp.innerHTML = data.main.temp_max
    humidity.innerHTML = data.main.humidity
    windSpeed.innerHTML = data.wind.speed
  }
}
