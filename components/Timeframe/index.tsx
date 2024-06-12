"use client"
import { TimeOption, TimeValue } from "@/models/types/time";
import { timeOptions } from "@/models/resource/options";
import styles from "./Timeframe.module.css";
import React from "react";

type TimeframeProps = {
    handleChangeTimeframe: (timeframe: TimeValue) => Promise<void>;
};

const Timeframe = ({ handleChangeTimeframe }: TimeframeProps) => {
    const Time = (option: TimeOption) => {
        return (
            <div className={styles.timeOption} onClick={() => handleChangeTimeframe(option.value)}>
                {option.label}
            </div>
        );
    };

    return (
        <section className={styles.timeframeContainer}>
            {timeOptions.map((option: TimeOption) => (
                <Time key={option.value.startTime} {...option} />
            ))}
        </section>
    );
};

export default Timeframe;
