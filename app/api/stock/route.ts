import { TimePeriod, TimePrecision } from "@/models/types/time";
import { FxempireRequestParams, FxempireResponse, StockValue } from "@/models/types/stock";
import { NextRequest, NextResponse } from "next/server";
import { FxEmpireRootURL, SearchParams } from "@/models/constant/fetch";
import { setFxempireRequest } from "@/models/init/fetch";
import { shortFormatDate, shortFormatTime } from "@/utils/time";

const fetchStockData = async (params: FxempireRequestParams): Promise<StockValue[]> => {
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

    const url = `${FxEmpireRootURL}?Identifier=${identifier}&IdentifierType=${identifierType}&AdjustmentMethod=${adjustmentMethod}&IncludeExtended=${includeExtended}&period=${period}&Precision=${precision}&StartTime=${startTime}&EndTime=${endTime}%2023:59`;
    const response = await fetch(url);
    if (response) {
        const data = (await response.json()) as FxempireResponse[];
        if (data) {
            return data.map((item: FxempireResponse) => {
                const date =
                    precision === "Minutes"
                        ? shortFormatTime(item.StartTime)
                        : shortFormatDate(item.StartDate);
                return {
                    price: item.Close,
                    date,
                } as StockValue;
            });
        }
    }
    return [];
};

export const GET = async (req: NextRequest) => {
    const startTime = req?.nextUrl.searchParams.get(SearchParams.startTime) as string | undefined;
    const period = req?.nextUrl.searchParams.get(SearchParams.period) as TimePeriod | undefined;
    const precision = req?.nextUrl.searchParams.get(SearchParams.precision) as
        | TimePrecision
        | undefined;

    try {
        const params: FxempireRequestParams = setFxempireRequest(period, precision, startTime);
        const stocks = await fetchStockData(params);
        return NextResponse.json(stocks);
    } catch (error) {
        console.error("Fetch error:", error);
        return NextResponse.json({ message: "Failed to fetch data" }, { status: 500 });
    }
};
