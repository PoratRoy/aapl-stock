import React from "react";
import styles from "./Loading.module.css";
import { tailChase } from "ldrs";
import { TEXT_COLOR } from "@/models/constant/color";

const Loading = () => {
    tailChase.register();

    return (
        <div className={styles.loading}>
            <l-tail-chase size="40" speed="1.75" color={TEXT_COLOR}></l-tail-chase>
        </div>
    );
};

export default Loading;
