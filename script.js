document.addEventListener("DOMContentLoaded", async () => {
  //Header section
  let dropdownUnits = document.getElementById("dropdown-units");
  let searchBox = document.getElementById("search-box");

  // Hero section
  let searchButton = document.getElementById("search-button");

  //Current Forecast section
  let CurrentCityName = document.getElementById("current-city");
  let currentDate = document.getElementById("current-date");
  let currentIcon = document.getElementById("current-icon");
  let currentTemp = document.getElementById("current-temp");
  let currentFeelsLike = document.getElementById("feels-like");
  let currentHumidity = document.getElementById("humidity");
  let currentWind = document.getElementById("wind");
  let currentPrecipitation = document.getElementById("precipitation");

  /* Daily Forecast section */
  //Day name
  let dailyForecastDayName1 = document.getElementById("daily-forecast-day-1");
  let dailyForecastDayName2 = document.getElementById("daily-forecast-day-2");
  let dailyForecastDayName3 = document.getElementById("daily-forecast-day-3");
  let dailyForecastDayName4 = document.getElementById("daily-forecast-day-4");
  let dailyForecastDayName5 = document.getElementById("daily-forecast-day-5");
  let dailyForecastDayName6 = document.getElementById("daily-forecast-day-6");
  let dailyForecastDayName7 = document.getElementById("daily-forecast-day-7");

  //Icon
  let dailyForecastIcon1 = document.getElementById("daily-forecast-icon-1");
  let dailyForecastIcon2 = document.getElementById("daily-forecast-icon-2");
  let dailyForecastIcon3 = document.getElementById("daily-forecast-icon-3");
  let dailyForecastIcon4 = document.getElementById("daily-forecast-icon-4");
  let dailyForecastIcon5 = document.getElementById("daily-forecast-icon-5");
  let dailyForecastIcon6 = document.getElementById("daily-forecast-icon-6");
  let dailyForecastIcon7 = document.getElementById("daily-forecast-icon-7");

  //High Temperature
  let dailyForecastTempHigh1 = document.getElementById(
    "daily-forecast-temp-high-1",
  );
  let dailyForecastTempHigh2 = document.getElementById(
    "daily-forecast-temp-high-2",
  );
  let dailyForecastTempHigh3 = document.getElementById(
    "daily-forecast-temp-high-3",
  );
  let dailyForecastTempHigh4 = document.getElementById(
    "daily-forecast-temp-high-4",
  );
  let dailyForecastTempHigh5 = document.getElementById(
    "daily-forecast-temp-high-5",
  );
  let dailyForecastTempHigh6 = document.getElementById(
    "daily-forecast-temp-high-6",
  );
  let dailyForecastTempHigh7 = document.getElementById(
    "daily-forecast-temp-high-7",
  );

  //Low Temperature
  let dailyForecastTempLow1 = document.getElementById(
    "daily-forecast-temp-low-1",
  );
  let dailyForecastTempLow2 = document.getElementById(
    "daily-forecast-temp-low-2",
  );
  let dailyForecastTempLow3 = document.getElementById(
    "daily-forecast-temp-low-3",
  );
  let dailyForecastTempLow4 = document.getElementById(
    "daily-forecast-temp-low-4",
  );
  let dailyForecastTempLow5 = document.getElementById(
    "daily-forecast-temp-low-5",
  );
  let dailyForecastTempLow6 = document.getElementById(
    "daily-forecast-temp-low-6",
  );
  let dailyForecastTempLow7 = document.getElementById(
    "daily-forecast-temp-low-7",
  );

  //Hourly Forecast section
  let hourlyForecastDropdown = document.getElementById(
    "hourly-forecast-dropdown",
  );

  //Icon
  let hourlyForecastIcon1 = document.getElementById(
    "hourly-forecast-panel-icon-1",
  );
  let hourlyForecastIcon2 = document.getElementById(
    "hourly-forecast-panel-icon-2",
  );
  let hourlyForecastIcon3 = document.getElementById(
    "hourly-forecast-panel-icon-3",
  );
  let hourlyForecastIcon4 = document.getElementById(
    "hourly-forecast-panel-icon-4",
  );
  let hourlyForecastIcon5 = document.getElementById(
    "hourly-forecast-panel-icon-5",
  );
  let hourlyForecastIcon6 = document.getElementById(
    "hourly-forecast-panel-icon-6",
  );
  let hourlyForecastIcon7 = document.getElementById(
    "hourly-forecast-panel-icon-7",
  );
  let hourlyForecastIcon8 = document.getElementById(
    "hourly-forecast-panel-icon-8",
  );

  //Temperature
  let hourlyForecastTemp1 = document.getElementById("hourly-forecast-temp-1");
  let hourlyForecastTemp2 = document.getElementById("hourly-forecast-temp-2");
  let hourlyForecastTemp3 = document.getElementById("hourly-forecast-temp-3");
  let hourlyForecastTemp4 = document.getElementById("hourly-forecast-temp-4");
  let hourlyForecastTemp5 = document.getElementById("hourly-forecast-temp-5");
  let hourlyForecastTemp6 = document.getElementById("hourly-forecast-temp-6");
  let hourlyForecastTemp7 = document.getElementById("hourly-forecast-temp-7");
  let hourlyForecastTemp8 = document.getElementById("hourly-forecast-temp-8");

  const API_KEY = "Ttm47EBYkievqyxTaJhWrJVEW9GgNjM6ib2GcpY0";

  async function fetchGeoLocation(city) {
    let url = `https://api.api-ninjas.com/v1/geocoding?city=${city}`;
    const response = await fetch(url, { headers: { "X-Api-Key": API_KEY } });
    const data = response.json();
    return data;
  }

  async function fetchWeather(lat, lon, unit) {
    let url = ``;
    if (unit === "celsius") {
      url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,precipitation`;
    } else {
      url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,precipitation&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch`;
    }
    const response = await fetch(url);
    const data = response.json();
    return data;
  }

  searchButton.addEventListener("click", async () => {
    let cityName = searchBox.value.trim();
    let unit = dropdownUnits.value;
    let geoCoding;
    let weatherData;

    searchBox.value = "";

    dropdownUnits.addEventListener("change", (event) => {
      unit = event.target.value;
      console.log("Temperature unit is changed to: ", unit);
    });

    try {
      geoCoding = await fetchGeoLocation(cityName);
    } catch (error) {
      console.error("Unable to fetch GeoLocation");
    }

    cityName = geoCoding[0].name;
    let latitude = geoCoding[0].latitude;
    let longitude = geoCoding[0].longitude;
    let country = geoCoding[0].country;

    console.log("Temperature unit: ", unit);
    console.log("Weather of the city: ", cityName);
    console.log("Latitude: ", latitude);
    console.log("Longitude: ", longitude);

    try {
      weatherData = await fetchWeather(latitude, longitude, unit);
    } catch (error) {
      console.error("Unable to fetch Weather data");
    }

    console.log(weatherData);

    update(cityName, country);
  });
});
