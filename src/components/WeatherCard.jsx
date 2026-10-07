function WeatherCard ({ city, temperature, condition, humidity, wind}) {

    return (
        <section className="weather-card">
            <div className="std-wrapper">

                <div className="weather-card-content">

                    <h2>{city}</h2>

                    <p className="weather-card-temperature">{temperature}°C</p>
                    <p>{condition}</p>

                    <div className="weather-card-details">
                        <div className="weather-card-col">
                            <div className="weather-card-tag">Humidity:</div>
                            <div className="weather-card-results">{humidity}%</div>
                        </div>
                        <div className="weather-card-col">
                            <div className="weather-card-tag">Wind:</div>
                            <div className="weather-card-results">{wind} km/h</div>
                        </div>
                    </div>


                </div>

            </div>
        </section>
    )

}

export default WeatherCard;