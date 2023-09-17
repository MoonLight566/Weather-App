const input = document.getElementById("search");
const date = document.querySelector(".date");
const time = document.querySelector(".time");
const city = document.querySelector(".city");
const num = document.querySelector(".num");
const ico = document.querySelector(".ico");
const icoc = document.querySelector(".icoc");
const valc = document.querySelector(".valc");
const vali = document.querySelector(".vali");
const valw = document.querySelector(".valw");
const valr = document.querySelector(".valr");
const day1Name = document.querySelector(".day1Name");
const day1max = document.querySelector(".day1max");
const day1min = document.querySelector(".day1min");
const day1ico = document.querySelector(".day1ico");
const day2Name = document.querySelector(".day2Name");
const day2max = document.querySelector(".day2max");
const day2min = document.querySelector(".day2min");
const day2ico = document.querySelector(".day2ico");
const day3Name = document.querySelector(".day3Name");
const day3max = document.querySelector(".day3max");
const day3min = document.querySelector(".day3min");
const day3ico = document.querySelector(".day3ico");
const day4Name = document.querySelector(".day4Name");
const day4max = document.querySelector(".day4max");
const day4min = document.querySelector(".day4min");
const day4ico = document.querySelector(".day4ico");
const day5Name = document.querySelector(".day5Name");
const day5max = document.querySelector(".day5max");
const day5min = document.querySelector(".day5min");
const day5ico = document.querySelector(".day5ico");
const day6Name = document.querySelector(".day6Name");
const day6max = document.querySelector(".day6max");
const day6min = document.querySelector(".day6min");
const day6ico = document.querySelector(".day6ico");
const day7Name = document.querySelector(".day7Name");
const day7max = document.querySelector(".day7max");
const day7min = document.querySelector(".day7min");
const day7ico = document.querySelector(".day7ico");

const displayWeather = (forecast) => {
  function WeekName(url) {
      const date = new Date(url.date);
      const options = { weekday: "long" };
      const dayOfWeek = date.toLocaleDateString("en-us", options);
      return dayOfWeek;
    }
    const date1 = new Date(forecast.location.localtime);
    const dateObject = new Date(date1);
    const day = dateObject.toLocaleString("en-US", { weekday: "long" });
    const month = dateObject.toLocaleString("en-US", { month: "short" });
    const year = dateObject.getFullYear();
    const formattedDateString = `${day} ,${month} ${year}`;
    const options = { hour: "numeric", minute: "numeric", hour12: true };
    const localTimeString = dateObject.toLocaleString("en-US", options);
    city.textContent = forecast.location.name;
    date.textContent = formattedDateString;
    time.textContent = localTimeString;
    num.textContent = `${Math.round(forecast.current.temp_c)} °C`;

    function updateIcon(container, iconURL) {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      const img = document.createElement("img");
      img.src = iconURL;
      container.appendChild(img);
    }
    updateIcon(ico, "https:" + forecast.current.condition.icon);
    updateIcon(icoc, "https:" + forecast.current.condition.icon);
    updateIcon(day1ico,"https:" + forecast.forecast.forecastday[1].day.condition.icon);
    updateIcon(day2ico,"https:" + forecast.forecast.forecastday[2].day.condition.icon);
    updateIcon(day3ico,"https:" + forecast.forecast.forecastday[3].day.condition.icon);
    updateIcon(day4ico,"https:" + forecast.forecast.forecastday[4].day.condition.icon);
    updateIcon(day5ico,"https:" + forecast.forecast.forecastday[5].day.condition.icon);
    updateIcon(day6ico,"https:" + forecast.forecast.forecastday[6].day.condition.icon);
    updateIcon(day7ico,"https:" + forecast.forecast.forecastday[7].day.condition.icon);

     const change = () => {
      if (forecast.forecast.forecastday[0].day.daily_will_it_rain === 1) {
        return "Rainfall expected";
      } else if (
        forecast.forecast.forecastday[0].day.daily_will_it_rain === 0
      ) {
        return "The weather is dry today";
      }
    };

    valc.textContent = forecast.current.condition.text;
    vali.textContent = forecast.current.humidity + " %";
    valw.textContent = forecast.current.wind_kph + " km/h";
    valr.textContent = change();
    day1Name.textContent = WeekName(forecast.forecast.forecastday[1]);
    day1max.textContent =forecast.forecast.forecastday[1].day.maxtemp_c + " °C";
    day1min.textContent =forecast.forecast.forecastday[1].day.mintemp_c + " °C";
    day2Name.textContent = WeekName(forecast.forecast.forecastday[2]);
    day2max.textContent =forecast.forecast.forecastday[2].day.maxtemp_c + " °C";
    day2min.textContent =forecast.forecast.forecastday[2].day.mintemp_c + " °C";
    day3Name.textContent = WeekName(forecast.forecast.forecastday[3]);
    day3max.textContent =forecast.forecast.forecastday[3].day.maxtemp_c + " °C";
    day3min.textContent =forecast.forecast.forecastday[3].day.mintemp_c + " °C";
    day4Name.textContent = WeekName(forecast.forecast.forecastday[4]);
    day4max.textContent =forecast.forecast.forecastday[4].day.maxtemp_c + " °C";
    day4min.textContent =forecast.forecast.forecastday[4].day.mintemp_c + " °C";
    day4Name.textContent = WeekName(forecast.forecast.forecastday[4]);
    day5max.textContent =forecast.forecast.forecastday[5].day.maxtemp_c + " °C";
    day5min.textContent =forecast.forecast.forecastday[5].day.mintemp_c + " °C";
    day5Name.textContent = WeekName(forecast.forecast.forecastday[5]);
    day6max.textContent =forecast.forecast.forecastday[6].day.maxtemp_c + " °C";
    day6min.textContent =forecast.forecast.forecastday[6].day.mintemp_c + " °C";
    day6Name.textContent = WeekName(forecast.forecast.forecastday[6]);
    day7max.textContent =forecast.forecast.forecastday[7].day.maxtemp_c + " °C";
    day7min.textContent =forecast.forecast.forecastday[7].day.mintemp_c + " °C";
    day7Name.textContent = WeekName(forecast.forecast.forecastday[7]);
   
}
const getWeather = async (city) => {
  const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7e07b1ea63c84a4f80921124230609&days=8&q=${city}`,{ mode: "cors" });
  return response.json();

}
input.addEventListener("keydown", async function weather(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    try{
    const forecast = await getWeather(input.value)
      displayWeather(forecast);}
     catch{
       alert(`No results found for ${input.value}. Please check the spelling or try searching for a different city.`);
    }
      input.value = "";
  }
});

window.onload = async () => {
  const data = await getWeather('Dubai'); 
  displayWeather(data);
}