import { JourneyType } from "@actions/types/JourneyType";

export type UserJourney = {
    journeyId: string,
    journeyType: JourneyType,
    status: JourneyStatus,
}

export enum JourneyStatus {
    START = "START",
    END = "END",
}