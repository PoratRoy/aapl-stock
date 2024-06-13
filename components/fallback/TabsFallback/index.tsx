import React from "react";
import styles from "./TabsFallback.module.css";
import Loading from "@/components/loading/Loading";

const TabsFallback: React.FC = () => {
    return (
        <section className={styles.tabsContainer} style={{marginTop: "5vh"}}>
            <Loading/>
        </section>
    );
};

export default TabsFallback;
