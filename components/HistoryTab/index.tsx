import React from "react";
import styles from "./HistoryTab.module.css"

const HistoryTab = () => {
    return (
        <section className={styles.historyContainer}>
            <h1>History Tab</h1>
            <p>
                Roy Porat{" "}
                <a href="https://github.com/PoratRoy" target="_blank">
                    Github
                </a>
            </p>
        </section>
    );
};

export default HistoryTab;
