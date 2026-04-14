async function getWeather() {
  const city = document.getElementById("city").value.trim();
  const result = document.getElementById("result");
  const container = document.querySelector(".container");

  if (city === "") {
    alert("Enter city name");
    return;
  }

  result.innerHTML = "Loading... ⏳";

  try {
    const response = await fetch(`https://wttr.in/${city}?format=j1`);
    const data = await response.json();

    const weather = data.current_condition[0].weatherDesc[0].value.toLowerCase();

    // 🌧️ Rain
    if (weather.includes("rain")) {
      document.body.style.background =
        "url('https://images.unsplash.com/photo-1501696461415-6bd6660c6742') no-repeat center/cover";

      container.style.background = "rgba(0, 0, 50, 0.6)";
    }

    // ☀️ Sunny
    else if (weather.includes("sun") || weather.includes("clear")) {
      document.body.style.background =
        "url('https://images.unsplash.com/photo-1502082553048-f009c37129b9') no-repeat center/cover";

      container.style.background = "rgba(255, 165, 0, 0.4)";
    }

    // ☁️ Cloudy
    else if (weather.includes("cloud")) {
      document.body.style.background =
        "url('https://images.unsplash.com/photo-1499346030926-9a72daac6c63') no-repeat center/cover";

      container.style.background = "rgba(100, 100, 100, 0.5)";
    }

    // 🌍 Default
    else {
      document.body.style.background =
        "url('https://images.unsplash.com/photo-1501630834273-4b5604d2ee31') no-repeat center/cover";

      container.style.background = "rgba(0, 0, 0, 0.5)";
    }

    result.innerHTML = `
      <h2>${city.toUpperCase()}</h2>
      <p>🌡️ Temp: ${data.current_condition[0].temp_C} °C</p>
      <p>☁️ Weather: ${data.current_condition[0].weatherDesc[0].value}</p>
    `;
  } catch (error) {
    result.innerHTML = "❌ Error fetching weather";
  }
}