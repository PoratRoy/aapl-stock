import React from "react";
import styles from "./LoadingUI.module.css";
import { TEXT_COLOR } from "@/models/constant/color";

type LoadingUIProps = {
    color?: string;
};

const LoadingUI: React.FC<LoadingUIProps> = ({ color = TEXT_COLOR }) => {
    return <div style={{ background: color }} className={styles.loading} />;
};

export default LoadingUI;
