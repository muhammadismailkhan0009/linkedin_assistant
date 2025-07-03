export type TraceMetrics = {
    inputContent: string;
    generatedContent: string;
    type: ContentType;
    eventType: EventType;
    timeStamp: Date;
}

export enum ContentType {
    POST="POST",
    COMMENT="COMMENT",
}

export enum EventType {
    GENERATED="GENERATED",
    COPIED="COPIED",
}