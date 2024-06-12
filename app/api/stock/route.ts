import { TimePeriod, TimePrecision } from "@/models/types/time";
import { FxempireRequestParams, FxempireResponse, StockValue } from "@/models/types/stock";
import { currentTime, getDateBefore } from "@/utils/time";
import { NextRequest, NextResponse } from "next/server";

const fetchStockData = async (params: FxempireRequestParams): Promise<StockValue[]> => {
    const rootUrl = "https://test.fxempire.com/api/v1/en/stocks/chart/candles";
    const {
        identifier,
        identifierType,
        adjustmentMethod,
        includeExtended,
        period,
        precision,
        startTime,
        endTime,
    } = params;

    const url = `${rootUrl}?Identifier=${identifier}&IdentifierType=${identifierType}&AdjustmentMethod=${adjustmentMethod}&IncludeExtended=${includeExtended}&period=${period}&Precision=${precision}&StartTime=${startTime}&EndTime=${endTime}%2023:59`;
    const response = await fetch(url);
    if (response) {
        const data = (await response.json()) as FxempireResponse[];
        if (data) {
            return data.map((item: FxempireResponse) => ({
                StartDate: item.StartTime,
                StartTime: item.StartTime,
                Open: item.Open,
                High: item.High,
                Low: item.Low,
                Close: item.Close,
                Volume: item.Volume,
                Date: `${item.StartDate} ${item.StartTime}`,
            }));
        }
    }
    return [];
};

export const GET = async (req: NextRequest) => {
    const startTime = req?.nextUrl.searchParams.get("startTime") as string | undefined;
    const period = req?.nextUrl.searchParams.get("period") as TimePeriod | undefined;
    const precision = req?.nextUrl.searchParams.get("precision") as TimePrecision | undefined;

    const params: FxempireRequestParams = {
        identifier: "AAPL.XNAS",
        identifierType: "Symbol",
        adjustmentMethod: "All",
        includeExtended: "false",
        period: period || "1",
        precision: precision || "Minutes",
        startTime: startTime || getDateBefore(1),
        endTime: currentTime(),
    };
    try {
        const stocks = await fetchStockData(params);
        return NextResponse.json(stocks);
    } catch (error) {
        console.error("Fetch error:", error);
        return NextResponse.json({ message: "Failed to fetch data" }, { status: 500 });
    }
};
