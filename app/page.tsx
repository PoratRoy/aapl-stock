import Tabs from "@/components/Tabs";
import styles from "./page.module.css";
import { Suspense } from "react";
import TabsFallback from "@/components/fallback/TabsFallback";

export default function Home() {
    return (
        <main className={styles.main}>
            <Suspense fallback={<TabsFallback />}>
                <Tabs />
            </Suspense>
        </main>
    );
}
