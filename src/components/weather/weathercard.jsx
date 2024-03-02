import "./weather.css";

const WeatherCard = ({ city, temperature, cloudiness, pressure, icon }) => {
    return <div className="weather__card">
        <h3>{city}</h3>
        <div className="weather__card-data">
            <p>Температура: {temperature}</p>
            <p>Атмосферное давление: {pressure}</p>
            <p>Облачность: {cloudiness} <br/><img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={cloudiness} /></p>
            
        </div>
    </div>
}

export default WeatherCard;