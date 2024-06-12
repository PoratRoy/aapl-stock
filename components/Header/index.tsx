import React from "react";
import styles from "./Header.module.css";
import { stockHeaderData } from "@/models/resource/stock";

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerRight}>
                <h1>Apple Inc</h1>
                <p>As of: {stockHeaderData.lastUpdated}</p>
            </div>
            <div className={styles.headerLeft}>
                <h2>
                    <span className={styles.arrow}>▲</span>
                    {stockHeaderData.currentPrice}
                </h2>
                <div>
                    <p>{stockHeaderData.currentPrice}</p>
                    <p>{stockHeaderData.priceChange}</p>
                    <p>{stockHeaderData.percentChange}</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
