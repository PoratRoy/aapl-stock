"use client";
import { TimeOption } from "@/models/types/time";
import { timeOptions } from "@/models/resource/options";
import styles from "./Timeframe.module.css";
import React from "react";

type TimeframeProps = {
    selectedTimeframe: TimeOption;
    handleChangeTimeframe: (timeframe: TimeOption) => Promise<void>;
};

const Timeframe = ({ handleChangeTimeframe, selectedTimeframe }: TimeframeProps) => {
    const Time = (option: TimeOption) => {
        return (
            <button
                onClick={() => handleChangeTimeframe(option)}
                className={
                    selectedTimeframe.label === option.label
                        ? styles.timeOptionSelected
                        : styles.timeOption
                }
            >
                {option.label}
            </button>
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
