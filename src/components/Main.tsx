import * as React from "react";
import ApiForecast from "./ApiForecast";
import styles from "../styles/Main.module.scss"

function Main() {
    return(
        <main className={styles.main}>
           <ApiForecast/>
        </main>
    );
}

export default Main