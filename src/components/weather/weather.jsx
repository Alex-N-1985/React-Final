import { useState } from "react";
import "./weather.css";

const Weather = () => {
    const [cityName, setCityName] = useState("");

    return <section className="weather">
        <h2>Погода</h2>
        <div className="weather__input">
            <input type="text" name = "city" placeholder="Город" value={cityName} 
            onChange={(e) => setCityName(e.target.value)} />
            <button>Выбрать</button>
        </div>
    </section>
}

export default Weather;