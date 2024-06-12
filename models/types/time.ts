export type TimePeriod = "1" | "15" | "24" | "30" | "48" | "60";
export type TimePrecision = "Minutes" | "Hours" | "Days" | "Weeks" | "Months" | "Years";

export type TimeValue = { startTime: string; period: TimePeriod; precision: TimePrecision };

export type TimeOption = {
    value: TimeValue;
    label: string;
};
