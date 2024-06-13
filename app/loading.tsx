"use client";
import React from "react";
import styles from "./page.module.css";
import LoadingUI from "@/components/loading/LoadingUI";
import { TEXT_COLOR_SECONDARY } from "@/models/constant/color";

export default function Loading() {
    return (
        <main className={styles.loadingPage}>
            <LoadingUI color={TEXT_COLOR_SECONDARY} />
        </main>
    );
}
