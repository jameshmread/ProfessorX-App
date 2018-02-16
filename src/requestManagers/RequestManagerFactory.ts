import { IResultRequest } from "../../interfaces/IResultRequest";
import { ResultCategories } from "../../enums/ResultCategories";
import { AllResultsRequestManager } from "./AllResultsRequestManager";
import { MutationResultsService } from "../services/mutation-results.service";
import { SurvivedResultsRequestManager } from "./SurvivedResultsRequestManager";
import { KilledResultsRequestManager } from "./KilledResultsRequestManager";
import { FailedResultsRequestManager } from "./FailedResultsRequestManager";

export class RequestManagerFactory {

    public getRequestManager (request: IResultRequest) {
        switch (request.resultCategory){
            case ResultCategories.all:
                return new AllResultsRequestManager(new MutationResultsService()).processRequest(request);
            case ResultCategories.survived:
                return new SurvivedResultsRequestManager(new MutationResultsService()).processRequest(request);
            case ResultCategories.killed:
                return new KilledResultsRequestManager(new MutationResultsService()).processRequest(request);
            case ResultCategories.failed:
                return new FailedResultsRequestManager(new MutationResultsService()).processRequest(request);
            default: return null;
        }
    }
}
