import * as React from "react";
import styles from '../styles/Weather.module.scss'

function Weather(props: any) {
    let keys = Object.keys(props.weather);
    console.log(props.weather)

    return (
        <div className={styles.grid_wrapper}>
            {keys.map(key => (<div className={styles.dateBlock} key={key}><p>{key}</p>
                    {props.weather[key].map(weatherInfo => (
                        <div key={weatherInfo.dt}><p className={styles.time}>{weatherInfo.dt_txt.substring(10)}</p>
                            <ul key={weatherInfo.dt_txt}>
                                <li>Ветер: {weatherInfo.wind.speed} м</li>
                                <li>Температура: {weatherInfo.main.temp}</li>
                                <li>{weatherInfo.weather.map(weather => weather.description[0].toUpperCase() + weather.description.slice(1))}</li>
                                <li>Видимость: {weatherInfo.visibility} м</li>
                            </ul>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Weather;