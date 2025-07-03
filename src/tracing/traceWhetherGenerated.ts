import { DataExchangeService } from "services/DataExchangeService";
import { ContentType, EventType, TraceMetrics } from "./types/TraceMetrics";

export function traceWhetherGenerated(inputContent: string, generatedContent: string, type: ContentType): void {

    console.log(generatedContent);
    const traces: TraceMetrics = {
        inputContent: inputContent,
        generatedContent: generatedContent,
        type: type,
        eventType: EventType.GENERATED,
        timeStamp: new Date()
    }
    new DataExchangeService().sendTracingData(traces);
}