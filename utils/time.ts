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
