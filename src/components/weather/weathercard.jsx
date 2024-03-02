import "./weather.css";

const WeatherCard = ({
    city, 
    temperature, 
    cloudiness, 
    pressure
}) => {
    return <div className="weather__card">
        <h3>{city}</h3>
        <div className="weather__card-data">
            <p>Температура: {temperature}</p>
            <p>Облачность: {cloudiness}</p>
            <p>Атмосферное давление: {pressure}</p>
        </div>
    </div>
}

export default WeatherCard;