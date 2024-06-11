export type FxempireRequestParams = {
    identifier: string;
    identifierType: string;
    adjustmentMethod: string;
    includeExtended: string;
    period: string;
    precision: string;
    startTime: string;
    endTime: string;
};

export type FxempireResponse = {
    StartDate: string;
    StartTime: string;
    EndDate: string;
    EndTime: string;
    UTCOffset: number;
    Open: number;
    High: number;
    Low: number;
    Close: number;
    Volume: number;
    Trades: number;
    TWAP: number;
    VWAP: number;
    Currency: string;
    Session: string;
    AdjustmentRatio: number;
    Date: string;
};

export type StockValue = {
    StartDate: string;
    StartTime: string;
    Open: number;
    High: number;
    Low: number;
    Close: number;
    Volume: number;
    Date: string;
};
