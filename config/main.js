class Weather {
	_apiKey = "020799ff33e9f809370a24af81f4b3eb";
	targetcity = document.querySelector(".city-target").value;
	_url = `http://api.openweathermap.org/data/2.5/weather?q=${this.targetcity}&lang=ru&units=metric&appid=${this._apiKey}`;
	humidity = document.querySelector(".stat__value--humidity");
	temp = document.querySelector(".weather__part-temp--value");
	city = document.querySelector(".weather__part-city");
	wind = document.querySelector(".stat__value--wind");
	stat = document.querySelector(".weather__part-temp--stat");
	weatherBlock = document.querySelector(".weather-block");
	getData() {
		axios.get(this._url).then((res) => {
			console.log(res.data);
			return res.data;
		});
	}
	setData() {
		axios.get(this._url).then((res) => {
			this.temp.innerHTML = Math.round(res.data.main.temp) + "°";
			this.city.innerHTML = res.data.name;
			this.humidity.innerHTML = res.data.main.humidity + "%";
			this.wind.innerHTML = Math.round(res.data.wind.speed) + "" + "К/М";
			this.stat.innerHTML = res.data.weather[0].description;
		});
	}
	setVisible() {
		this.weatherBlock.style.opacity = "1";
		this.weatherBlock.style.transform = "translateY(0px)";
	}
}

document.addEventListener("DOMContentLoaded", () => {
	document.querySelector("button").addEventListener("click", () => {
		const WeatherObj = new Weather();
		WeatherObj.setVisible();
		WeatherObj.getData();
		WeatherObj.setData();
	});
});
