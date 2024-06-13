import React from "react";
import styles from "./LoadingChart.module.css";
import Loading from "../Loading";
import { TEXT_COLOR_SECONDARY } from "@/models/constant/color";

const LoadingChart = () => {
    return (
        <section className={styles.loading}>
            <Loading color={TEXT_COLOR_SECONDARY} />
        </section>
    );
};

export default LoadingChart;
