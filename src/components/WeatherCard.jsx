function WeatherCard () {

    return (
        <section className="weather-card">
            <div className="std-wrapper">

                <div className="weather-card-content">

                    <h2>Melbourne</h2>

                    <p className="weather-card-temperature">18°C</p>
                    <p>Partly cloudy</p>

                    <div className="weather-card-details">
                        <div className="weather-card-col">
                            <div className="weather-card-tag">Humidity:</div>
                            <div className="weather-card-results">65%</div>
                        </div>
                        <div className="weather-card-col">
                            <div className="weather-card-tag">Wind:</div>
                            <div className="weather-card-results">12 km/h</div>
                        </div>
                    </div>


                </div>

            </div>
        </section>
    )

}

export default WeatherCard;