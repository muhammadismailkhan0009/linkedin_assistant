import { DataExchangeService } from "services/DataExchangeService"
import { JourneyStatus, UserJourney } from "./types/UserJourney";
import { JourneyType } from "@actions/types/JourneyType";

const dataExchangeService = new DataExchangeService();


export const PostCreationJourney = {
    startJourney(journeyId: string) {

        // FIXME: write logic in this function
    },

    endJourney(journeyId: string) {
        // FIXME: write logic
    }
}

export const CommentCreationJourney = {
    startJourney(journeyId: string) {

        const userJourney: UserJourney = {
            journeyId: journeyId,
            journeyType: JourneyType.COMMENT_CREATION,
            status: JourneyStatus.START,
        }
        dataExchangeService.sendJourneyInfo(userJourney);
    },

    endJourney(journeyId: string) {

        const userJourney: UserJourney = {
            journeyId: journeyId,
            journeyType: JourneyType.COMMENT_CREATION,
            status: JourneyStatus.END,
        }
        dataExchangeService.sendJourneyInfo(userJourney);
    }
}

