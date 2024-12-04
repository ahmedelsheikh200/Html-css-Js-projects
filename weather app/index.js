const apiKey = "50bff4d61bc82a9fe7265320d1072129";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherimg = document.querySelector(".weather-icon");
async function checkWeather(city) {
    const response = await fetch (apiUrl+city +`&appid=${apiKey}`);
    var data = await response.json();

    if (response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";

    }
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp +"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed + " km/hr";

    if (data.weather[0].main === "Clouds"){
        weatherimg.src="views/images/clouds.png"
    }else if (data.weather[0].main === "Clear"){
        weatherimg.src="views/images/clear.png"
    }else if (data.weather[0].main === "Drizzle"){
        weatherimg.src="views/images/drizzle.png"
    }else if (data.weather[0].main === "Mist"){
        weatherimg.src="views/images/mist.png"
    }else if (data.weather[0].main === "Rain"){
        weatherimg.src="views/images/rain.png"
    }else if (data.weather[0].main == "Snow"){
        weatherimg.src="views/images/snow.png"
    };

    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";


    console.log(data);
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value)});

