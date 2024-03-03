import { useEffect, useState } from "react";
import "./weather.css";
import WeatherCard from './weathercard';

const Weather = () => {
    const [cityName, setCityName] = useState("Москва");
    const [inputData, setInputData] = useState("Москва");
    const [weatherData, setWeatherData] = useState({});


    useEffect(() => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=f5b7f29b16e197c2ad71a56430df4512&units=metric&lang=RU`;
        fetch(url).then((response) => {
            return response.json();
        }).then((result) => {
            setWeatherData(result);
        }).catch((error) => {console.log(error)});
    }, [cityName]);
    
    console.log(weatherData);
    console.log(Object.keys(weatherData).length);

    return <section className="weather">
        <h2>Погода</h2>
        <div className="weather__input">
            <input type="text" name = "city" placeholder="Город" value={inputData} 
            onChange={(e) => setInputData(e.target.value)} />
            <button onClick={(e) => {setCityName(inputData)}}>Выбрать</button>
        </div>
        <div className="weather__container"> 
            {
                Object.keys(weatherData).length === 0  ? <p>Поиск данных...</p> : Object.keys(weatherData).length > 2 ? <WeatherCard 
                city={weatherData.name} 
                temperature={weatherData.main.temp} 
                cloudiness={weatherData.weather[0].description} 
                pressure={weatherData.main.pressure} 
                icon={weatherData.weather[0].icon}
                /> : <p>Данные не найдены.</p>
            }
        </div>
    </section>
}

export default Weather;