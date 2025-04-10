const apiKey = "b4c426c91009e3429c4af53c61fd6e9c";

const uimaker = () => {
  const container = document.createElement("div");
  container.className = "container-box";

  container.innerHTML = `
    <input type="text" class="form-control mb-3" id="search" placeholder="Enter city name and press Enter">
    <h1 class="city">City Name</h1>
    <div class="weather-icon"><img id="icon" src="" alt="weather icon"></div>
    <h2 class="temperature" id="containerTemp">--°C</h2>
    <p class="description">--</p>
  `;

  document.body.appendChild(container);
};

const shoat = (data) => {
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".description").innerHTML = data.weather[0].description;
  document.getElementById("containerTemp").innerHTML = `${Math.round(data.main.temp)}°C`;

  const iconCode = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  document.getElementById("icon").src = iconUrl;
};

const getWeather = async (city) => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${apiKey}&units=metric`);
      const data = await res.json();
      if (data.cod === 200) {
        shoat(data);
      } else {
        alert("City not found in India!");
      }
    } catch (error) {
      alert("Error fetching data.");
    }
  };  

uimaker();

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");

  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const city = e.target.value.trim();
      if (city) getWeather(city);
    }
  });

  getWeather("Surat");
});
