import React from "react";
import styles from "./Loading.module.css";
import { TEXT_COLOR } from "@/models/constant/color";

type LoadingProps = {
    color?: string;
};

const Loading: React.FC<LoadingProps> = ({ color = TEXT_COLOR }) => {
    return <div style={{ background: color }} className={styles.loading} />;
};

export default Loading;
