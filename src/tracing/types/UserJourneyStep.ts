export type UserJourneyStep = {
    journeyId: string,
    stepNumber: number,
    stepType: StepType,
    contentType: ContentType,
    inputContent: string,
    outputContent: string,
}

export enum StepType {
    GENERATED = "GENERATED",
    COPIED = "COPIED",
    POSTED = "POSTED",
}

export enum ContentType {
    POST = "POST",
    COMMENT = "COMMENT",
} 