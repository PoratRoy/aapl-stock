import { TimeOption } from "@/models/types/common";
import styles from "./Timeframe.module.css";
import React from "react";
import { getDateBefore, getDateBeforeMonths, getDateBeforeYears } from "@/utils/time";

const Timeframe = () => {
    const timeOptions: TimeOption[] = [
        { value: getDateBefore(1), label: "1D" },
        { value: getDateBefore(3), label: "3D" },
        { value: getDateBefore(5), label: "5D" },
        { value: getDateBefore(7), label: "1W" },
        { value: getDateBeforeMonths(1), label: "1M" },
        { value: getDateBeforeMonths(6), label: "6M" },
        { value: getDateBeforeYears(1), label: "1Y" },
        { value: getDateBeforeYears(2), label: "2Y" },
        { value: getDateBeforeYears(5), label: "5Y" },
    ];

    const handleSelectTime = (option: TimeOption) => {
        console.log(option.value);
    };

    const Time = (option: TimeOption) => {
        return (
            <div className={styles.timeOption} onClick={() => handleSelectTime(option)}>
                {option.label}
            </div>
        );
    };

    return (
        <section className={styles.timeframeContainer}>
            {timeOptions.map((option: TimeOption) => (
                <Time key={option.value} {...option} />
            ))}
        </section>
    );
};

export default Timeframe;
