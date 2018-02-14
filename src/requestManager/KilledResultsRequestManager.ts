import { RequestManager } from "./RequestManager";
import { IMutationResult } from "../../interfaces/IMutationResult";
import { MutationResultsService } from "../services/mutation-results.service";

export class KilledResultsRequestManager extends RequestManager {
    constructor (private resultsService: MutationResultsService) {
        super();
    }
    protected getResult (): Array<IMutationResult> {
        return this.resultsService.getAllKilledMutants();
    }
}
