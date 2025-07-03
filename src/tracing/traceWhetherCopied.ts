import { DataExchangeService } from "services/DataExchangeService";
import { ContentType, EventType, TraceMetrics } from "./types/TraceMetrics";

export function traceWhetherCopied(inputContent: string, generatedContent: string, type: ContentType): void {

    const traces: TraceMetrics = {
        inputContent: inputContent,
        generatedContent: generatedContent,
        type: type,
        eventType: EventType.COPIED,
        timeStamp: new Date()
    }
    new DataExchangeService().sendTracingData(traces);
}