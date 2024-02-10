functin getWeather(){
 const apikey = "YOUR_API_KEY";
 const city = document.getElementById('city-input').value;
 const apiUrl = 'https://api.openweathermap.org/data/3.0/onecall?q=${city}&appid=${apiKey}&units=metric';
 
 fetch(apiUrl)
   .then(responce => respoce.json())
   .then(data => {
     document.getElementById('city-name').textContent = data.name;
	 document.getElementById('waether-desc').textContent = data.weather[0].description;
	 document.getElementById('temprature').textContent = Temprature:${data.main.temp}•C;
	 document.getElementById('humidity').textContent = 'Humidity':${data.main.humidity}%';
	 document.getElementById('wind-speed').textContent = 'Wind Speed:${data.wind.speed}m/s';
	 })
	 .catch(error => {
	   console.log('Error fetching weather data:',error);
	   alert('Failed to fetch weather data.Please try again.');
	   });
	}