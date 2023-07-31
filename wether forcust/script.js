document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', fetchWeatherData);
  });
  
  async function fetchWeatherData() {
    const apiKey = 'd2f828b6916ad38e51a7aa27d20be5a2';
    const cityInput = document.getElementById('cityInput').value;
    const weatherDataContainer = document.getElementById('weatherData');
  
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`);
      const data = await response.json();
  
      if (data.cod === 200) {
        const weatherDescription = data.weather[0].description;
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
  
        weatherDataContainer.innerHTML = `
          <p><strong>Weather:</strong> ${weatherDescription}</p>
          <p><strong>Temperature:</strong> ${temperature}°C</p>
          <p><strong>Humidity:</strong> ${humidity}%</p>
        `;
      } else {
        weatherDataContainer.innerHTML = `<p>City not found. Please try again.</p>`;
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }
  