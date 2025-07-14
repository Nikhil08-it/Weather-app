async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const response = await fetch(`http://localhost:5000/weather?city=${city}`);
  const data = await response.json();

  const resultDiv = document.getElementById('weatherResult');

  if (data.error) {
    resultDiv.innerHTML = `<p>${data.error}</p>`;
  } else {
    resultDiv.innerHTML = `
      <p><strong>City:</strong> ${data.name}</p>
      <p><strong>Temperature:</strong> ${data.temp}°C</p>
      <p><strong>Weather:</strong> ${data.weather}</p>
    `;
  }
}
