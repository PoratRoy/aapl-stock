"use client";
import { TabOption } from "@/models/types/common";
import React, { useState } from "react";
import Chart from "../Chart";
import HistoryTab from "../HistoryTab";
import styles from "./Tabs.module.css";

const Tabs: React.FC = () => {
    const tabs: TabOption[] = [
        { title: "Overview", content: <Chart /> },
        { title: "History", content: <HistoryTab /> },
    ];
    const [tabContent, setTabContent] = useState<React.ReactNode>(
        tabs[0].content as React.ReactNode,
    );

    const handleChangeTab = (tab: TabOption) => {
        setTabContent(tab.content);
    };

    const Tab = (option: TabOption) => {
        return (
            <div className={styles.tab} onClick={() => handleChangeTab(option)}>
                {option.title}
            </div>
        );
    };

    return (
        <section className={styles.tabsContainer}>
            <section className={styles.tabsSections}>
                {tabs.map((tab) => (
                    <Tab key={tab.title} {...tab} />
                ))}
            </section>
            <section className={styles.tabContent}>{tabContent}</section>
        </section>
    );
};

export default Tabs;
