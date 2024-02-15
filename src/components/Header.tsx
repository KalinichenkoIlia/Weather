import * as React from "react";

import styles from "../styles/Header.module.scss";

function Header() {
    return(
        <header className={styles.header}>
            <h1>Weather</h1>
        </header>
    )
}
export default Header