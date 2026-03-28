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
  let currentWindUnit = document.getElementById("wind-unit");
  let currentPrecipitationUnit = document.getElementById("precipitation-unit");

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

  //Time
  let hourlyForecastTime1 = document.getElementById(
    "hourly-forecast-panel-time-1",
  );
  let hourlyForecastTime2 = document.getElementById(
    "hourly-forecast-panel-time-2",
  );
  let hourlyForecastTime3 = document.getElementById(
    "hourly-forecast-panel-time-3",
  );
  let hourlyForecastTime4 = document.getElementById(
    "hourly-forecast-panel-time-4",
  );
  let hourlyForecastTime5 = document.getElementById(
    "hourly-forecast-panel-time-5",
  );
  let hourlyForecastTime6 = document.getElementById(
    "hourly-forecast-panel-time-6",
  );
  let hourlyForecastTime7 = document.getElementById(
    "hourly-forecast-panel-time-7",
  );
  let hourlyForecastTime8 = document.getElementById(
    "hourly-forecast-panel-time-8",
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

  let unit = "celsius";
  let geoCoding;
  let weatherData;
  let currentLat;
  let currentLon;
  let currentCity;
  let currentCountry;

  async function fetchGeoLocation(city) {
    let url = `https://api.api-ninjas.com/v1/geocoding?city=${city}`;
    const response = await fetch(url, { headers: { "X-Api-Key": API_KEY } });
    const data = response.json();
    return data;
  }

  async function fetchWeather(lat, lon, unit) {
    let url = ``;
    if (unit === "celsius") {
      url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,precipitation,is_day`;
    } else {
      url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,precipitation,is_day&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch`;
    }
    const response = await fetch(url);
    const data = response.json();
    return data;
  }

  function dateAndTime() {
    const currentTime = new Date();

    let date = currentTime.getDate();
    let month = currentTime.getMonth();
    let year = currentTime.getFullYear();
    let day = currentTime.getDay();

    switch (month) {
      case 0:
        month = "Jan";
        break;

      case 1:
        month = "Feb";
        break;

      case 2:
        month = "Mar";
        break;

      case 3:
        month = "Apr";
        break;

      case 4:
        month = "May";
        break;

      case 5:
        month = "Jun";
        break;

      case 6:
        month = "Jul";
        break;

      case 7:
        month = "Aug";
        break;

      case 8:
        month = "Sep";
        break;

      case 9:
        month = "Oct";
        break;

      case 10:
        month = "Nov";
        break;

      case 11:
        month = "Dec";
        break;
    }

    switch (day) {
      case 0:
        day = "Sunday";
        break;

      case 1:
        day = "Monday";
        break;

      case 2:
        day = "Tuesday";
        break;

      case 3:
        day = "Wednesday";
        break;

      case 4:
        day = "Thursday";
        break;

      case 5:
        day = "Friday";
        break;

      case 6:
        day = "Saturday";
        break;
    }

    let dateDisplay = {
      date: date,
      month: month,
      year: year,
      day: day,
    };

    return dateDisplay;
  }

  function iconPathFinder(weatherCode, isDay) {
    let iconPath;

    if (weatherCode === 0) {
      if (isDay === 0) {
        iconPath = "./assets/images/icon-clear-night.webp";
      } else {
        iconPath = "./assets/images/icon-sunny.webp";
      }
    } else if (weatherCode === 1 || weatherCode === 2) {
      iconPath = "./assets/images/icon-partly-cloudy.webp";
    } else if (weatherCode === 3) {
      iconPath = "./assets/images/icon-overcast.webp";
    } else if (weatherCode === 45 || weatherCode === 48) {
      iconPath = "./assets/images/icon-fog.webp";
    } else if (
      weatherCode === 51 ||
      weatherCode === 53 ||
      weatherCode === 55 ||
      weatherCode === 56 ||
      weatherCode === 57
    ) {
      iconPath = "./assets/images/icon-drizzle.webp";
    } else if (
      weatherCode === 61 ||
      weatherCode === 63 ||
      weatherCode === 65 ||
      weatherCode === 66 ||
      weatherCode === 67 ||
      weatherCode === 80 ||
      weatherCode === 81 ||
      weatherCode == 82
    ) {
      iconPath = "./assets/images/icon-rain.webp";
    } else if (
      weatherCode === 71 ||
      weatherCode === 73 ||
      weatherCode === 75 ||
      weatherCode === 77 ||
      weatherCode === 85 ||
      weatherCode === 86
    ) {
      iconPath = "./assets/images/icon-snow.webp";
    } else if (weatherCode === 95 || weatherCode === 96 || weatherCode === 99) {
      iconPath = "./assets/images/icon-storm.webp";
    }

    return iconPath;
  }

  function update(city, country, weather) {
    let cityDisplay = `${city}, ${country}`;
    let dateDisplay = dateAndTime();

    CurrentCityName.textContent = cityDisplay;
    currentDate.textContent = `${dateDisplay.day}, ${dateDisplay.month} ${dateDisplay.date}, ${dateDisplay.year}`;
    currentTemp.textContent = weather.current.temperature_2m;
    currentFeelsLike.textContent = weather.current.apparent_temperature;
    currentHumidity.textContent = weather.current.relative_humidity_2m;
    currentWind.textContent = weather.current.wind_speed_10m;
    currentPrecipitation.textContent = weather.current.precipitation;
    currentIcon.setAttribute(
      "src",
      String(iconPathFinder(weather.current.weather_code)),
    );

    if (unit === "fahrenheit") {
      currentWindUnit.textContent = "mph";
      currentPrecipitationUnit.textContent = "inch";
    }

    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let todayIndex = new Date().getDay();
    dailyForecastDayName1.textContent = dayNames[todayIndex];
    dailyForecastDayName2.textContent = dayNames[(todayIndex + 1) % 7];
    dailyForecastDayName3.textContent = dayNames[(todayIndex + 2) % 7];
    dailyForecastDayName4.textContent = dayNames[(todayIndex + 3) % 7];
    dailyForecastDayName5.textContent = dayNames[(todayIndex + 4) % 7];
    dailyForecastDayName6.textContent = dayNames[(todayIndex + 5) % 7];
    dailyForecastDayName7.textContent = dayNames[(todayIndex + 6) % 7];

    dailyForecastIcon1.setAttribute(
      "src",
      String(iconPathFinder(weather.daily.weather_code[0])),
    );
    dailyForecastIcon2.setAttribute(
      "src",
      String(iconPathFinder(weather.daily.weather_code[1])),
    );
    dailyForecastIcon3.setAttribute(
      "src",
      String(iconPathFinder(weather.daily.weather_code[2])),
    );
    dailyForecastIcon4.setAttribute(
      "src",
      String(iconPathFinder(weather.daily.weather_code[3])),
    );
    dailyForecastIcon5.setAttribute(
      "src",
      String(iconPathFinder(weather.daily.weather_code[4])),
    );
    dailyForecastIcon6.setAttribute(
      "src",
      String(iconPathFinder(weather.daily.weather_code[5])),
    );
    dailyForecastIcon7.setAttribute(
      "src",
      String(iconPathFinder(weather.daily.weather_code[6])),
    );

    dailyForecastTempHigh1.textContent = weather.daily.temperature_2m_max[0];
    dailyForecastTempHigh2.textContent = weather.daily.temperature_2m_max[1];
    dailyForecastTempHigh3.textContent = weather.daily.temperature_2m_max[2];
    dailyForecastTempHigh4.textContent = weather.daily.temperature_2m_max[3];
    dailyForecastTempHigh5.textContent = weather.daily.temperature_2m_max[4];
    dailyForecastTempHigh6.textContent = weather.daily.temperature_2m_max[5];
    dailyForecastTempHigh7.textContent = weather.daily.temperature_2m_max[6];

    dailyForecastTempLow1.textContent = weather.daily.temperature_2m_min[0];
    dailyForecastTempLow2.textContent = weather.daily.temperature_2m_min[1];
    dailyForecastTempLow3.textContent = weather.daily.temperature_2m_min[2];
    dailyForecastTempLow4.textContent = weather.daily.temperature_2m_min[3];
    dailyForecastTempLow5.textContent = weather.daily.temperature_2m_min[4];
    dailyForecastTempLow6.textContent = weather.daily.temperature_2m_min[5];
    dailyForecastTempLow7.textContent = weather.daily.temperature_2m_min[6];

    const hourlyTime = [
      "12AM",
      "1AM",
      "2AM",
      "3AM",
      "4AM",
      "5AM",
      "6AM",
      "7AM",
      "8AM",
      "9AM",
      "10AM",
      "11AM",
      "12PM",
      "1PM",
      "2PM",
      "3PM",
      "4PM",
      "5PM",
      "6PM",
      "7PM",
      "8PM",
      "9PM",
      "10PM",
      "11PM",
    ];
    let currentHour = new Date().getHours();
    hourlyForecastTime1.textContent = hourlyTime[currentHour % 24];
    hourlyForecastTime2.textContent = hourlyTime[(currentHour + 1) % 24];
    hourlyForecastTime3.textContent = hourlyTime[(currentHour + 2) % 24];
    hourlyForecastTime4.textContent = hourlyTime[(currentHour + 3) % 24];
    hourlyForecastTime5.textContent = hourlyTime[(currentHour + 4) % 24];
    hourlyForecastTime6.textContent = hourlyTime[(currentHour + 5) % 24];
    hourlyForecastTime7.textContent = hourlyTime[(currentHour + 6) % 24];
    hourlyForecastTime8.textContent = hourlyTime[(currentHour + 7) % 24];

    hourlyForecastTemp1.textContent = weather.hourly.temperature_2m[0];
    hourlyForecastTemp2.textContent = weather.hourly.temperature_2m[1];
    hourlyForecastTemp3.textContent = weather.hourly.temperature_2m[2];
    hourlyForecastTemp4.textContent = weather.hourly.temperature_2m[3];
    hourlyForecastTemp5.textContent = weather.hourly.temperature_2m[4];
    hourlyForecastTemp6.textContent = weather.hourly.temperature_2m[5];
    hourlyForecastTemp7.textContent = weather.hourly.temperature_2m[6];
    hourlyForecastTemp8.textContent = weather.hourly.temperature_2m[7];

    hourlyForecastIcon1.setAttribute(
      "src",
      String(iconPathFinder(weather.hourly.weather_code[0])),
    );
    hourlyForecastIcon2.setAttribute(
      "src",
      String(iconPathFinder(weather.hourly.weather_code[1])),
    );
    hourlyForecastIcon3.setAttribute(
      "src",
      String(iconPathFinder(weather.hourly.weather_code[2])),
    );
    hourlyForecastIcon4.setAttribute(
      "src",
      String(iconPathFinder(weather.hourly.weather_code[3])),
    );
    hourlyForecastIcon5.setAttribute(
      "src",
      String(iconPathFinder(weather.hourly.weather_code[4])),
    );
    hourlyForecastIcon6.setAttribute(
      "src",
      String(iconPathFinder(weather.hourly.weather_code[5])),
    );
    hourlyForecastIcon7.setAttribute(
      "src",
      String(iconPathFinder(weather.hourly.weather_code[6])),
    );
    hourlyForecastIcon8.setAttribute(
      "src",
      String(iconPathFinder(weather.hourly.weather_code[7])),
    );
  }

  searchButton.addEventListener("click", async () => {
    let cityName = searchBox.value.trim();

    searchBox.value = "";

    try {
      geoCoding = await fetchGeoLocation(cityName);
    } catch (error) {
      console.error("Unable to fetch GeoLocation");
    }

    currentCity = geoCoding[0].name;
    currentLat = geoCoding[0].latitude;
    currentLon = geoCoding[0].longitude;
    currentCountry = geoCoding[0].country;

    console.log("Temperature unit: ", unit);
    console.log("Weather of the city: ", currentCity);
    console.log("Latitude: ", currentLat);
    console.log("Longitude: ", currentLon);

    try {
      weatherData = await fetchWeather(currentLat, currentLon, unit);
    } catch (error) {
      console.error("Unable to fetch Weather data");
    }

    console.log(weatherData);

    update(currentCity, currentCountry, weatherData);
  });

  dropdownUnits.addEventListener("change", async () => {
    unit = dropdownUnits.value;
    if (currentLat !== null && currentLon !== null) {
      try {
        weatherData = await fetchWeather(currentLat, currentLon, unit);
        update(currentCity, currentCountry, weatherData);
      } catch (error) {
        console.error("Unable to update weather data after unit change");
      }
    }
  });
});
