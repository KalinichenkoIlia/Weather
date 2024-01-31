import * as React from "react";
import {useState} from "react";
import styles from "../styles/Select.module.css"



function Select(props) {
    const [change, changeClick] = useState(false);
    return (
        <div className={styles.weatherSelect}>
            <select  onChange={(e) => props.getSelectedCity(e.target.value)}>
                <option value={'Moscow'}>Москва</option>
                <option value={'Vladivostok'}>Владивосток</option>
                <option value={'Krasnodar'}>Краснодар</option>
                <option value={'Kaliningrad'}>Калининград</option>
                <option value={'Ekaterinburg'}>Екатеринбург</option>
                <option value={'Yaroslavl'}>Ярославль</option>
                <option value={'Saint_Petersburg'}>Санкт-Петербург</option>
            </select>
            {change ? (
                <button  onClick={() => {
                    changeClick(false);
                    props.getClick(false)
                }}>На сегодня</button>
            ) : (
                <button  onClick={() => {
                    changeClick(true);
                    props.getClick(true)
                }}>На 5 дней</button>)
            }
        </div>
    );
}

export default Select;