import { currentTime, getDateBefore } from "@/utils/time";
import { defualtSearchParams } from "../constant/fetch";
import { FxempireRequestParams } from "../types/stock";
import { TimePeriod, TimePrecision } from "../types/time";

export const setFxempireRequest = (
    period: TimePeriod | undefined,
    precision: TimePrecision | undefined,
    startTime: string | undefined,
): FxempireRequestParams => {
    const { identifier, identifierType, adjustmentMethod, includeExtended } = defualtSearchParams;

    return {
        identifier,
        identifierType,
        adjustmentMethod,
        includeExtended,
        period: period || (defualtSearchParams.period as TimePeriod),
        precision: precision || (defualtSearchParams.precision as TimePrecision),
        startTime: startTime || getDateBefore(1),
        endTime: currentTime(),
    } as FxempireRequestParams;
};
