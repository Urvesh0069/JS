const shoat = (data) => {
    document.querySelector(".city").innerHTML = `${data.name}`;
    document.querySelector(".speed").innerHTML = `💨${data.wind.speed}KM/h`;
    document.querySelector(".description").innerHTML = `${data.weather[0].description}`;
    document.getElementById("container").innerHTML = `${Math.round(data.main.temp)}°C`;
    document.querySelector(".h-temp").innerHTML = `H : ${Math.round(data.main.temp_max)}°C`;
    document.querySelector(".l-temp").innerHTML = `L : ${Math.round(data.main.temp_min)}°C`;
};

const getheader = async (citrange) => {
    let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citrange}&appid=5e29241d39320db830911f1d7829631b&units=metric`);
    let res = await req.json();
    shoat(res);
};

const getlocation = async (latt, long) => {
    let temp = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latt}&lon=${long}&appid=5e29241d39320db830911f1d7829631b&units=metric`);
    let req = await temp.json();
    shoat(req);
};

document.getElementById("go-btn").addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latt = position.coords.latitude;
                const long = position.coords.longitude;
                getlocation(latt, long);
                document.querySelector(".long").innerHTML = `latitude = ${latt}`;
                document.querySelector(".latt").innerHTML = `longitude = ${long}`;
            },
            (error) => {
                const showdetails = document.getElementById("showdetails"); // Add this line if it's used
                if (showdetails) {
                    showdetails.innerHTML = error.message;
                }
                console.log(error.message);
            }
        );
    }
});
