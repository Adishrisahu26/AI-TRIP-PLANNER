const API_KEY = "YOUR_OPENWEATHER_API_KEY";

export const getWeather = async (city) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    const data = await res.json();

    return {
      temp: data.main.temp,
      condition: data.weather[0].main,
      humidity: data.main.humidity,
      wind: data.wind.speed,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};