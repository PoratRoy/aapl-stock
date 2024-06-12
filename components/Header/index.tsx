import React from "react";
import styles from "./Header.module.css";
import { stockHeaderData } from "@/models/resource/stock";

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <h1>Apple Stock</h1>
            <p>Current Price: {stockHeaderData.currentPrice}</p>
            <p>Price Change: {stockHeaderData.priceChange}</p>
            <p>Percent Change: {stockHeaderData.percentChange}</p>
            <p>Last Updated: {stockHeaderData.lastUpdated}</p>
        </header>
    );
};

export default Header;
