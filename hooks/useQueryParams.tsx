import { tabs } from "@/models/resource/options";
import { useSearchParams } from "next/navigation";

export const useQueryParams = () => {
    const searchParams = useSearchParams();

    const getQueryParams = (key: string) => {
        const tab = searchParams.get(key);
        let prevSearchParams = {};
        if (tab) prevSearchParams = { tab };
        return prevSearchParams;
    }

    const getCurrentTab = () => {
        const searchParamsTab = searchParams.get("tab");
        if (searchParamsTab) {
            const tab = tabs.find((tab) => tab.path === searchParamsTab);
            if (tab) {
                return tab.content
            }
        }
        return tabs[0].content
    }

    const getCurrentDate = () => {
        const searchParamsDate = searchParams.get("date");
        if (searchParamsDate) {
            return searchParamsDate;
        }
        return "1D";
    }

    return { getQueryParams, getCurrentTab, getCurrentDate };
}

export default useQueryParams;