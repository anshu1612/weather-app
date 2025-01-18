const weather = document.getElementById("weather");
const temp = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("windSpeed");
const searchBtn = document.getElementById("search");
let icon = document.getElementById("icon");

function init() {
  fetchData("mandla");
}

searchBtn.addEventListener("click", () => {
  let city = document.getElementById("city").value;
  if (city == "") {
    window.alert("Please Enter City");
  }
  if (city != "") {
    fetchData(city);
  }
});

async function fetchData(city) {
  const apikey = "195a4d1e9cd34df6bfe83016251801";
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}&aqi=no`
  );
  const data = await response.json();
  console.log(data);
  displayData(data);
}

function displayData(data) {
  temp.textContent = data.current.temp_c;
  weather.textContent = data.current.condition.text;
  wind.textContent = data.current.wind_kph + " kmph";
  humidity.textContent = data.current.humidity + " %";
  icon.src = data.current.condition.icon;
}

init();
