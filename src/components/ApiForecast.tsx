import * as React from "react";
import axios from "axios";
import {useState, useEffect} from "react";
import {COORDS} from "./data";
import {organizeData} from "./utils";
import Weather from "./Weather";
import Select from "./Select";
import styles from '../styles/ApiForecast.module.css'

function ApiForecast() {
    const [weather, getWeather] = useState<any>([]);
    const [click, getClick] = useState(false);
    const [selected, getSelectedCity] = useState('Moscow');

    let lat: string = COORDS[selected]['lat'];
    let lon: string = COORDS[selected]['lon'];
    let cnt: string = click >= true ? "40" : "3";

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=ru&units=metric&cnt=${cnt}&appid=07ef45e829012299d1f1dbcc4c17790f`)
            .then(response => {

                getWeather(organizeData(response.data));
            }).catch(error => {
            console.log(error);
        });
    }, [selected, click]);
    return (
        <div className={styles.forecast}>
            <Weather weather={weather}/>
            <Select getClick={getClick} getSelectedCity={getSelectedCity}/>
        </div>
    );
}

export default ApiForecast;