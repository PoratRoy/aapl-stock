export const currentTime = (): string => {
    const date = new Date();
    return formatDate(date);
};

export const getDateBefore = (days: number = 1): string => {
    const date = new Date();
    date.setDate(date.getDate() - days);
    return formatDate(date);
};

export const getDateBeforeMonths = (months: number = 1): string => {
    const date = new Date();
    date.setMonth(date.getMonth() - months);
    return formatDate(date);
};

export const getDateBeforeYears = (years: number = 1): string => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - years);
    return formatDate(date);
};

export const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${month}/${day}/${year}`;
};

export const shortFormatDate = (date: string): string => {
    const dateParts = date.split("/");

    if (dateParts.length === 3) {
        const day = dateParts[0];
        const month = dateParts[1];
        const year = dateParts[2];
        const shortYear = year.slice(-2);
        return `${day}/${month}/${shortYear}`;
    }
    return date;
};

export const shortFormatTime = (time: string): string => {
    const parts = time.split(" ");

    if (parts.length === 2) {
        const time = parts[0];
        const ampm = parts[1];

        const timeParts = time.split(":");
        if (timeParts.length === 3) {
            const hours = timeParts[0];
            const minutes = timeParts[1];
            return `${hours}:${minutes} ${ampm}`;
        }
    }
    return time;
};
