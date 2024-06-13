import { getDateBefore, getDateBeforeMonths, getDateBeforeYears } from "@/utils/time";
import { TimeOption } from "../types/time";
import OverviewTab from "@/components/OverviewTab";
import HistoryTab from "@/components/HistoryTab";
import { TabOption } from "../types/common";

export const timeOptions: TimeOption[] = [
    { value: { startTime: getDateBefore(1), period: "1", precision: "Minutes" }, label: "1D" },
    { value: { startTime: getDateBefore(3), period: "1", precision: "Minutes" }, label: "3D" },
    { value: { startTime: getDateBefore(5), period: "15", precision: "Minutes" }, label: "5D" },
    { value: { startTime: getDateBefore(7), period: "60", precision: "Minutes" }, label: "1W" },
    { value: { startTime: getDateBeforeMonths(1), period: "15", precision: "Hours" }, label: "1M" },
    { value: { startTime: getDateBeforeMonths(6), period: "30", precision: "Hours" }, label: "6M" },
    { value: { startTime: getDateBeforeYears(1), period: "24", precision: "Hours" }, label: "1Y" },
    { value: { startTime: getDateBeforeYears(2), period: "24", precision: "Hours" }, label: "2Y" },
    { value: { startTime: getDateBeforeYears(4), period: "48", precision: "Hours" }, label: "4Y" },
];

export const tabs: TabOption[] = [
    { title: "Overview", path: "overview", content: <OverviewTab /> },
    { title: "History", path: "history", content: <HistoryTab /> },
];
