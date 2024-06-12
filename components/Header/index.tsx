import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
    const stockData = {
        currentPrice: "$145.09",
        priceChange: "+2.34",
        percentChange: "+1.64%",
        lastUpdated: "June 12, 2024, 10:30 AM",
    };

    return (
        <header className={styles.header}>
            <h1>Apple Stock</h1>
            <p>Current Price: {stockData.currentPrice}</p>
            <p>Price Change: {stockData.priceChange}</p>
            <p>Percent Change: {stockData.percentChange}</p>
            <p>Last Updated: {stockData.lastUpdated}</p>
        </header>
    );
};

export default Header;
