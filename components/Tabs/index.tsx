"use client";
import { TabOption } from "@/models/types/common";
import React, { useEffect, useState } from "react";
import styles from "./Tabs.module.css";
import { tabs } from "@/models/resource/options";
import Link from "next/link";
import useQueryParams from "@/hooks/useQueryParams";

const Tabs: React.FC = () => {
    const [tabContent, setTabContent] = useState<any>();
    const { getCurrentTab } = useQueryParams();

    useEffect(() => {
        setTabContent(getCurrentTab());
    }, []);

    const handleChangeTab = (tab: TabOption) => {
        setTabContent(tab.content);
    };

    const Tab = (option: TabOption) => {
        return (
            <Link
                className={styles.tab}
                onClick={() => handleChangeTab(option)}
                href={{
                    query: { tab: option.path },
                }}
            >
                {option.title}
            </Link>
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
