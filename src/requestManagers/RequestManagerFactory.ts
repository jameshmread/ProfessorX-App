import { IResultRequest } from "../../interfaces/IResultRequest";
import { ResultCategories } from "../../enums/ResultCategories";
import { AllResultsRequestManager } from "./AllResultsRequestManager";
import { MutationResultsService } from "../services/mutation-results.service";
import { SurvivedResultsRequestManager } from "./SurvivedResultsRequestManager";
import { KilledResultsRequestManager } from "./KilledResultsRequestManager";
import { FailedResultsRequestManager } from "./FailedResultsRequestManager";

export class RequestManagerFactory {

    constructor (request: IResultRequest) {
        switch (request.resultCategory){
            case ResultCategories.all:
                return new AllResultsRequestManager(new MutationResultsService());
            case ResultCategories.survived:
                return new SurvivedResultsRequestManager(new MutationResultsService());
            case ResultCategories.killed:
                return new KilledResultsRequestManager(new MutationResultsService());
            case ResultCategories.failed:
                return new FailedResultsRequestManager(new MutationResultsService());
            default: return Error("Request manager factory could not find an appropriate request manager");
        }
    }
}
