import { FxempireRequestParams, FxempireResponse, StockValue } from "@/models/types/stock";

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

export const GET = async () => {
    const params: FxempireRequestParams = {
        identifier: "AAPL.XNAS",
        identifierType: "Symbol",
        adjustmentMethod: "All",
        includeExtended: "false",
        period: "30",
        precision: "Minutes",
        endTime: "03/01/2023",
        startTime: "02/22/2023",
    };
    try {
        const stocks = await fetchStockData(params);
        return new Response(JSON.stringify(stocks), { status: 200 });
    } catch (error) {
        console.error("Fetch error:", error);
        return new Response(JSON.stringify({ message: "Failed to fetch data" }), { status: 500 });
    }
};
