import React from "react";
import styles from "./TabsFallback.module.css";
import LoadingUI from "@/components/Loading/LoadingUI";

const TabsFallback: React.FC = () => {
    return (
        <section className={styles.tabsContainer} style={{marginTop: "5vh"}}>
            <LoadingUI/>
        </section>
    );
};

export default TabsFallback;
