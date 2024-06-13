import React from "react";
import styles from "./LoadingChart.module.css";
import { TEXT_COLOR_SECONDARY } from "@/models/constant/color";
import LoadingUI from "../LoadingUI";

const LoadingChart = () => {
    return (
        <section className={styles.loading}>
            <LoadingUI color={TEXT_COLOR_SECONDARY} />
        </section>
    );
};

export default LoadingChart;
